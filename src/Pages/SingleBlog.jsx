import React from 'react';
import { useParams } from 'react-router-dom';
import { FaUser, FaClock } from "react-icons/fa";

import { useLoaderData } from 'react-router-dom';
import PagesSideBar from './PagesSideBar';
import SideBar from '../Components/SideBar';

const SingleBlog = () => {
  const { id } = useParams(); // Use useParams hook to get the id parameter from the URL
  const data = useLoaderData();

  // Check if data is an array
  if (!Array.isArray(data)) {
    return <div>Error: Invalid data format anukeerth</div>;
  }

//   console.log("ID:", id);
// console.log("Data:", data);

  // Find the blog post with the matching ID
  const blog = data.find(blog => String(blog.id) === id);

  console.log("bdata is", blog)
  // Check if the blog post is found
  if (!blog) {
    return <div>Error: Blog post not found for ID  {id}</div>;
  }

  // Destructure the blog post data
  const { title, image, category, author, published_date, reading_time, content } = blog;
  return (
    <div className="px-14 py-12 flex">
      {/* BLOG DETAILS */}
      <div className='mx-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
        <div className='lg:w-3/4 mx-auto'>
            <div className=" w-8/12">
                <img src={image} className='w-full mx-auto rounded '/>
            </div>
            <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
            <p className='mb-3 text-gray-600'><FaUser className='inline-flex item mr-2'/>{author} | {published_date}</p>
            <p className='mb-3 text-gray-600'><FaClock className='inline-flex item mr-2'/>{reading_time}</p>
            <p className='text-base text-grey-500 mb-6 lg:text-xl'>{content}</p>
        </div>


      </div>
        <div className='lg:w-1/2'>
     <SideBar/>
  
        </div>
    </div>
  );
};

export default SingleBlog;
