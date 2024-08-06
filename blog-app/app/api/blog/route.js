import { ConnectDB } from "@/lib/config/db"
import { NextResponse } from "next/server"
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";
const fs=require('fs')

const LoadDB = async()=>{
    ConnectDB()
}
LoadDB();

// export async function GET(request) {
//     const blogs = await BlogModel.find({});
//     return NextResponse.json({blogs})
    
// }


export async function GET(request){
    // console.log("Blog got hit")
    const blogId = request.nextUrl.searchParams.get('id');

    if(blogId){
        const blog = await BlogModel.findById(blogId)
        return NextResponse.json(blog)

    }
    else{
        const blogs = await BlogModel.find({})
        return NextResponse.json({blogs})
    }
    // const blogs = await BlogModel.find({});
    // return NextResponse.json({msg:"API working"})

}

// POst request
export async function POST(request){
    const formData = await request.formData();
    const timestamp = Date.now(); 
    const image = formData.get("image"); 
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);

    // const imageByteData = await image.arrayBuffer();
    // const buffer = Buffer.from(imageByteData);


    const path = `./public/${timestamp}_${image.name}`;
     await writeFile(path, buffer);

     const imageUrl = `/${timestamp}_${image.name}`;

//   console.log(imageUrl);
const blogData= {
    title:`${formData.get('title')}`,
    description:`${formData.get('description')}`,
    category:`${formData.get('category')}`,
    author:`${formData.get('author')}`,
    image:`${imageUrl}`,
    authorImg:`${formData.get('authorImg')}`,

}
// await BlogModel.create(blogData);
await BlogModel.create(blogData)
console.log('Blog saved');

return NextResponse.json({success:true, msg:"Blog Added"});

}

export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);

    fs.unlink(`./public${blog.image}`,()=>{})
    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({msg:"Blog Deleted"})
    
}