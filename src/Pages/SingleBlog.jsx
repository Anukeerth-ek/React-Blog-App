import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaUser, FaClock } from "react-icons/fa";

import { useLoaderData } from "react-router-dom";
import PagesSideBar from "./PagesSideBar";
import SideBar from "../Components/SideBar";

const SingleBlog = () => {

  const[followText, setFollowText] = useState(false)

     const { id } = useParams(); // Use useParams hook to get the id parameter from the URL
     const data = useLoaderData();

     // Check if data is an array
     if (!Array.isArray(data)) {
          return <div>Error: Invalid data format anukeerth</div>;
     }

     //   console.log("ID:", id);
     // console.log("Data:", data);

     // Find the blog post with the matching ID
     const blog = data.find((blog) => String(blog.id) === id);

     console.log("bdata is", blog);
     // Check if the blog post is found
     if (!blog) {
          return <div>Error: Blog post not found for ID {id}</div>;
     }

     // Destructure the blog post data
     const { title, image, category, author, authorPic, published_date, reading_time, content } = blog;
     return (
          <div className=" py-12 flex flex-col items-center justify-center">
               {/* BLOG DETAILS */}
               <div className="mx-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12 px-3 md:px-0">
                    <div className="lg:w-2/4 flex flex-col mx-auto">
                         <h2 className=" text-[32px] leading-10 md:leading-none md:text-[44px] mt-2 md:mt-6  font-bold mb-4 hover:text-blue-500 cursor-pointer">{title}</h2>

                         <div className="flex items-center my-5 md:my-[30px] ">
                              <div className="cursor-pointer">
                                   <img
                                        src={
                                             authorPic
                                                  ? "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=626&ext=jpg"
                                                  : ""
                                        }
                                        className="w-[44px] h-[44px] rounded-[50%]  object-contain"
                                   />
                              </div>

                             <div>
                             <div className="flex cursor-pointer ">
                                   <p className="mx-3 text-black">{author} </p>
                                   <p className="text-[#1A8917]" onClick={()=> setFollowText(!followText)}> · {followText ? 'Following' : 'Follow'}</p>
                              </div>
                              <div className="flex">
                                   <p className="mx-3 text-gray-500 font-medium text-sm">{reading_time.replace("minutes", "mins read")}</p>

                                   <p className=" text-gray-500 font-medium text-sm"> · {published_date}</p>
                              </div>
                             </div>
                         </div>

                         <div className=" md:w-10/12">
                              <img src={image} className="w-full mx-auto rounded " />
                         </div>
                         
                         <p className="text-base text-grey-500 my-6 lg:text-xl">{content}</p>
                    </div>
               </div>
               <div className="lg:w-1/2">
                    <SideBar />
               </div>
          </div>
     );
};

export default SingleBlog;
