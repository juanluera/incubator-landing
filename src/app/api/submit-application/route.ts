import { supabase } from '@/config/supabase'
import { sendConfirmationEmail } from '@/lib/email'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        // Debug environment variables in production
        console.log('🔍 Environment check in production:');
        console.log('- ZOHO_ACCESS_TOKEN:', process.env.ZOHO_ACCESS_TOKEN ? 'SET' : 'MISSING');
        console.log('- ZOHO_ACCOUNT_ID:', process.env.ZOHO_ACCOUNT_ID ? 'SET' : 'MISSING');
        console.log('- ZOHO_FROM_EMAIL:', process.env.ZOHO_FROM_EMAIL ? 'SET' : 'MISSING');

        if (!supabase) {
            console.error("Supabase client not initialized");
            return NextResponse.json({ success: false, error: 'Database configuration error' }, { status: 500 });
        }

        const formData = await request.formData();

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const school = formData.get('school') as string;
        const description = formData.get('description') as string;
        const status = formData.get('status') as string;
        const cvFile = formData.get('cv') as File;


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

            const fileName = `waitlist/${applicationId}/${sanitizedName}_cv.${fileExt}`;

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
            .from('applications')
            .insert([{
                name,
                email,
                school,
                description,
                status,
                cv_url: cvUrl,
                cv_filename: cvFilename
            }])
        if (error) {
            console.error("Error submitting application", error);
            throw error
        }

        // Send confirmation email
        const emailResult = await sendConfirmationEmail(email, name, 'waitlist');

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
        console.error('API Error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}