import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";

const BlogCards = ({ blogs, currentPage, selectedCategory, pageSize }) => {
     const filteredBlogs = blogs
          .filter(blog => !selectedCategory || blog.category === selectedCategory)
          .slice(0, currentPage * pageSize); // Slice up to the current page size

     return (
          <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3">
               {filteredBlogs.map(blog => (
                
                    
               
                    <Link to={`/blog/${blog.id}`} key={blog.id} className="p-5 shadow-lg rounded cursor-pointer">
                         <div className="flex">
                         <img src={blog.authorPic} className="w-[34px] h-[24px] rounded-xl object-contain mr-1"/>
                         <p className=" text-[#242424] mr-1">
                               {blog.author}
                         </p>
                        <p className="text-[#6B6B6B]">· {blog.published_date}</p>
                              
                         </div>
                             <div className="flex justify-between items-center">
                         <div>
                             <h3 className="mt-4 mb-2 font-bold text-[#242424] text-lg hover:text-blue-600 cursor-pointer">{blog.title .length > 34 ? blog.title.slice(0, 34) + '...' : blog.title}</h3>
                             <p className=" text-base text-[#242424] font-serif">{blog.content.length > 100 ? blog.content.slice(0, 100) + '...' : blog.content}</p>

                             </div>
                            <div className="max-w-[112px] min-h-[112px] ml-1">
                            <img src={blog.image} className=" w-[100%] h-[100%] " alt={blog.title} />
                            </div>
                         </div>
                  <div className="flex">
                  {blog.tags.map(item => (
                    <p>{item}</p>
                   )
                   )}
                  </div>
                      
                    
                    </Link>
              ) )}
          </div>
     );
};

export default BlogCards;