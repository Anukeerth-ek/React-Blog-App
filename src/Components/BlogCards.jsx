import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const BlogCards = ({ blogs, currentPage, selectedCategory, pageSize }) => {
     const filteredBlogs = blogs
          .filter(blog => !selectedCategory || blog.category === selectedCategory)
          .slice(0, currentPage * pageSize); // Slice up to the current page size

     return (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
               {filteredBlogs.map(blog => (
                    <Link to={`/blog/${blog.id}`} key={blog.id} className="p-5 shadow-lg rounded cursor-pointer">
                         <div>
                              <img src={blog.image} className="w-full" alt={blog.title} />
                         </div>
                         <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">{blog.title}</h3>
                         <p className="mb-2 text-gray-600">
                              <FaUser className="inline-flex items-center mr-2" /> {blog.author}
                         </p>
                         <p className="text-sm">Published: {blog.published_date}</p>
                    </Link>
               ))}
          </div>
     );
};

export default BlogCards;