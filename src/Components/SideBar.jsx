import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const SideBar = () => {
     const [popularBlogs, setPopularBlogs] = useState([]);

     useEffect(() => {
          fetch("http://localhost:5000/blogs")
               .then((res) => res.json())
               .then((data) => setPopularBlogs(data.slice(0, 15)));
     }, []);

     return (
          <div>
               <div>
                    <h3 className="text-2xl font-semibold px-2">Latest Blogs</h3>
               </div>
               <div>
                    {popularBlogs.slice(0, 5).map((blog) => (
                         <div key={blog.id} className="my-5 border-b-2 border-spacing-2 px-4">
                              <h4 className="font-semibold mb-1">{blog.title}</h4>
                              <Link to="/" className="font-normal pb-2 hover:text-blue-600 inline-flex items-center py-1 ">
                                   Read more
                                   <FaRegArrowAltCircleRight className="ml-1" />
                              </Link>
                         </div>
                    ))}
               </div>

               {/* POPULAR BLOGS */}
               <div >
                    <h3 className="text-2xl font-semibold px-2 mt-16">Popular Blogs</h3>
               </div>
               <div>
                    {popularBlogs.slice(0, 5).map((blog) => (
                         <div key={blog.id} className="my-5 border-b-2 border-spacing-2 px-4">
                              <h4 className="font-semibold mb-1">{blog.title}</h4>
                              <Link to="/" className="font-normal pb-2 hover:text-blue-600 inline-flex items-center py-1 ">
                                   Read more
                                   <FaRegArrowAltCircleRight className="ml-1" />
                              </Link>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default SideBar;
