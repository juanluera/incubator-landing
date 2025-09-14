import { supabase } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest){
    try{
        const formData = await request.json();

        const {data, error} = await supabase
            .from('applications')
            .insert([{
                name: formData.name,
                email: formData.email,
                company: formData.company,
                description: formData.description,
                stage: formData.stage
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