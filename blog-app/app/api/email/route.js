import { ConnectDB } from "@/lib/config/db"
import emailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";


const LoadDB =async()=>{
    await ConnectDB();
}
LoadDB();

// Post method
export async function POST(request) {
    const formData = await request.formData();
    const emailData = {
        email:`${formData.get('email')}`
    }
    await emailModel.create(emailData);
    return NextResponse.json({success:true, msg:"Email Subscribed"})
    
}
// Get method
export async function GET(request) {
    const emails = await emailModel.find({});
    return NextResponse.json({emails})
    // console.log(emails);
    
    
}

// Delete method
export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    await emailModel.findByIdAndDelete(id);
    return NextResponse.json({success:true, msg:"Email Deleted"})
    
}