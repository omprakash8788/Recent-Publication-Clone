"use client";
// import { blog_data } from "@/Assets/assets";
import React, { useEffect, useState } from "react";
import BlogItems from "./BlogItems";
import axios from "axios";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  // console.log(menu);
  const [blogs, setBlogs]=useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fecthBlog =async()=>{
    const response = await axios.get('api/blog');
    setBlogs(response.data.blogs);
    console.log("here i am storing data", response.data.blogs)

  }

  useEffect(()=>{
    fecthBlog()
  },[])


  const itemsPerPage = 6;


  // Filter the data based on the selected category
  const filteredData = blogs.filter((item) =>
    menu === "All" ? true : item.category === menu
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Get the current items to be displayed on the page
  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle category change and reset current page
  const handleCategoryChange = (category) => {
    setMenu(category);
    setCurrentPage(1); // Reset to first page on category change
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  return (
    <>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => handleCategoryChange("All")}
          className={
            menu === "All"
              ? "bg-purple-500 text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          All
        </button>
        <button   onClick={() => handleCategoryChange("Technology")}  className={
            menu === "Technology"
              ? "bg-purple-500 text-white py-1 px-4 rounded-sm"
              : ""
          } >Technology</button>
        <button  onClick={() => handleCategoryChange("Startup")}  className={
            menu === "Startup"
              ? "bg-purple-500 text-white py-1 px-4 rounded-sm"
              : ""
          } >Startup</button>
        <button  onClick={() => handleCategoryChange("Lifestyle")}  className={
            menu === "Lifestyle"
              ? "bg-purple-500 text-white py-1 px-4 rounded-sm"
              : ""
          }>LifeStyle</button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
      {currentItems.map((item, index) => {
        
          return (
            <BlogItems
              key={index}
              id={item._id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          );
        })}
      </div>
       {/* Pagination Controls */}
       <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 border rounded-sm ${
              currentPage === index + 1
                ? "bg-purple-500 text-white"
                : "bg-white text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default BlogList;
