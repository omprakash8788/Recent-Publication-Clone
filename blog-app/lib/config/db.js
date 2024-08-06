import mongoose from "mongoose";

export const ConnectDB= async()=>{
    await mongoose.connect('mongodb+srv://food:food@cluster0.1u3ejlu.mongodb.net/recent-publication')
 console.log('DB Connected');
 
}