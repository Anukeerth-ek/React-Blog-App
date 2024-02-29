import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const SideBar = () => {
     const [popularBlogs, setPopularBlogs] = useState([]);
     const [error, setError] = useState(null);

     useEffect(() => {
          async function fetchPopularBlogs() {
              try {
                  const response = await fetch('modern-react-js-blog-starter-files/api/blogsData.json');
                  if (!response.ok) {
                      throw new Error('Failed to fetch popular blogs');
                  }
                  const data = await response.json();
                  setPopularBlogs(data.slice(0, 5));
              } catch (error) {
                  setError(error.message || 'An error occurred while fetching popular blogs');
                  console.error('Error fetching popular blogs:', error);
              }
          }
      
          fetchPopularBlogs();
      }, []);

     return (
          <div>
               {error && <div>Error: {error}</div>} 
               <div>
                    <h3 className="text-2xl font-semibold px-2">Staff Picks</h3>
               </div>
               <div>
                    {popularBlogs.map((blog) => (
                         <div key={blog.id} className="my-5 border-b-2 border-spacing-2 px-4">
                              <h4 className="font-semibold mb-1">{blog.title}</h4>
                              <Link to={`/blog/${blog.id}`} className="font-normal pb-2 hover:text-blue-600 inline-flex items-center py-1 ">
                                   Read more
                                   <FaRegArrowAltCircleRight className="ml-1" />
                              </Link>
                         </div>
                    ))}
               </div>

               {/* POPULAR BLOGS */}
               <div >
                    <h3 className="text-2xl font-semibold px-2 mt-16">Suggested For you</h3>
               </div>
               <div>
                    {popularBlogs.map((blog) => (
                         <div key={blog.id} className="my-5 border-b-2 border-spacing-2 px-4">
                              <h4 className="font-semibold mb-1">{blog.title}</h4>
                              <Link to={`/blog/${blog.id}`} className="font-normal pb-2 hover:text-blue-600 inline-flex items-center py-1 ">
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
