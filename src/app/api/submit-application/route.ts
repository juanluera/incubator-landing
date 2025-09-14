import { supabase } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest){
    try{
        const formData = await request.formData();

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const company = formData.get('company') as string;
        const description = formData.get('description') as string;
        const stage = formData.get('stage') as string;
        const cvFile = formData.get('cv') as File;


        let cvUrl = null;
        let cvFilename = null;

        if (cvFile && cvFile.size > 0){
            const applicationId = Date.now();
            const fileExt = cvFile.name.split('.').pop();
            const fileName = `${applicationId}/cv.${fileExt}`;

            const {data: fileData, error: fileError} = await supabase.storage
                .from('cvs')
                .upload(fileName, cvFile);

            if (fileError){
                console.error("Error uploading CV file", fileError);
                throw new Error("Failed to upload CV file");
            }

            cvUrl = fileData.path;
            cvFilename = cvFile.name;
        }

        const {data, error} = await supabase
            .from('applications')
            .insert([{
                name,
                email,
                company,
                description,
                stage,
                cv_url: cvUrl,
                cv_filename: cvFilename
            }])
        if (error) {
            console.error("Error submitting application", error);
            throw error
        }

        return NextResponse.json({success:true,data})

    } catch (error){
        console.error('API Error:', error);
        return NextResponse.json({success:false,error:'Internal Server Error'}, {status:500});
    }
}