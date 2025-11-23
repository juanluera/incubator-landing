import { supabase } from '@/config/supabase'
import { sendConfirmationEmail } from '@/lib/email'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        console.log('=== Network API Route Called ===');
        
        const formData = await request.formData();
        console.log('FormData received');

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const company = formData.get('company') as string;
        const position = formData.get('position') as string;
        const experience = formData.get('experience') as string;
        const industry = formData.get('industry') as string;
        const mentorship_areas = formData.get('mentorship_areas') as string;
        const motivation = formData.get('motivation') as string;
        const cvFile = formData.get('cv') as File;

        console.log('Form data parsed:', { name, email, company, position, experience, industry });
        console.log('CV file:', cvFile ? `${cvFile.name} (${cvFile.size} bytes)` : 'No file');

        let cvUrl = null;
        let cvFilename = null;

        if (cvFile && cvFile.size > 0) {
            // Create readable date-based ID: YYYYMMDD_HHMMSS
            const now = new Date();
            const dateStr = now.getFullYear().toString() + 
                           (now.getMonth() + 1).toString().padStart(2, '0') + 
                           now.getDate().toString().padStart(2, '0');
            const timeStr = now.getHours().toString().padStart(2, '0') + 
                           now.getMinutes().toString().padStart(2, '0') + 
                           now.getSeconds().toString().padStart(2, '0');
            const applicationId = `${dateStr}_${timeStr}`;
            
            const fileExt = cvFile.name.split('.').pop();
            
            // Create descriptive filename with person's name
            const sanitizedName = name.toLowerCase()
                .replace(/[^a-z0-9]/g, '_')  // Replace non-alphanumeric with underscore
                .replace(/_+/g, '_')        // Replace multiple underscores with single
                .replace(/^_|_$/g, '');     // Remove leading/trailing underscores
            
            const fileName = `network/${applicationId}/${sanitizedName}_resume.${fileExt}`;

            const { data: fileData, error: fileError } = await supabase.storage
                .from('cvs')
                .upload(fileName, cvFile);

            if (fileError) {
                console.error("Error uploading CV file", fileError);
                throw new Error("Failed to upload CV file");
            }

            cvUrl = fileData.path;
            cvFilename = cvFile.name;
        }

        const { data, error } = await supabase
            .from('network_applications')
            .insert([{
                name,
                email,
                company,
                position,
                experience,
                industry,
                mentorship_areas,
                motivation,
                cv_url: cvUrl,
                cv_filename: cvFilename
            }])

        if (error) {
            console.error("Error submitting network application", error);
            throw error
        }

        // Send confirmation email
        console.log('Sending confirmation email to:', email);
        const emailResult = await sendConfirmationEmail(email, name, 'network');
        
        if (!emailResult.success) {
            console.error('Failed to send confirmation email:', 'error' in emailResult ? emailResult.error : 'Unknown error');
            // Don't fail the entire request if email fails, just log it
        } else {
            console.log('Confirmation email sent successfully');
        }

        return NextResponse.json({ 
            success: true, 
            data,
            emailSent: emailResult.success 
        })

    } catch (error) {
        console.error('Network API Error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
