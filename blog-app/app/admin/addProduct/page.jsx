"use client";
import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
// import { MdCloudUpload } from "react-icons/md";

const page = () => {
  const [image, setImage] = useState(false);
  const [data, setData]=useState({
    title:"",
    description:"",
    category:"Startup",
    author:"Om",
    authorImg:"/author_img.png"
    
  })
  const onChangeHandler=(e)=>{
    const name= e.target.name;
    const value=e.target.value;
    setData(data=>({...data,[name]:value}))
    console.log(data);
    
  }

  const onSubmitHandler= async(event)=>{
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title); 
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    // we are stroing image in image state.
    formData.append("image", image);
    const response = await axios.post("/api/blog", formData); 

    if(response.data.success){
      toast.success(response.data.msg);
      setImage(false)
      setData({
        title:"",
        description:"",
        category:"Startup",
        author:"Om",
        authorImg:"/author_img.png"
      })
    }
    else{
      toast.error("Error");
    }

  }

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload Thumbnails</p>
        <label htmlFor="image">
          {/* <MdCloudUpload className='mt-4 w-[140px] h-[70px] border border-black '/> */}
          <Image
            className="mt-4"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={70}
            alt="uploadimage"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4">Blog Title</p>
        <input
        name="title"
        onChange={onChangeHandler}
        value={data.title}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Type here"
          required
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
        name="description"
        onChange={onChangeHandler}
        value={data.description}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="write content here"
          rows={6}
          required
        />
        <p className="text-xl mt-4">Blog category</p>
        <select
        onChange={onChangeHandler}
        value={data.category}
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
          name="category"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button className="mt-8 w-40 h-12 bg-blue-600 text-white" type="submit">
          ADD
        </button>
      </form>
    </>
  );
};

export default page;
