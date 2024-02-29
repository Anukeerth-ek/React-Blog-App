import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";
import ReactLoading from 'react-loading';


const BlogPage = ({ type, color }) => {
     const [blogs, setBlogs] = useState([]);
     const [currentPage, setCurrentPage] = useState(1);
     const pageSize = 15;
     const [selectedCategory, setSelectedCategory] = useState(null);
     const [activeCategory, setActiveCategory] = useState(null);
     const [error, setError] = useState(null);
     const [loading, setLoading] = useState(false);

     useEffect(() => {
          const fetchBlogs = async () => {
               setLoading(true);
               try {
                    const apiUrl = "modern-react-js-blog-starter-files/api/blogsData.json"; 
                    let url = `${apiUrl}?page=${currentPage}&limit=${pageSize}`;
                    if (selectedCategory) {
                         url += `&category=${selectedCategory}`;
                    }
                    const response = await fetch(url);
                    if (!response.ok) {
                         throw new Error("Failed to fetch blogs");
                    }
                    const data = await response.json();
                    setBlogs(data);
                    setError(null); 
               } catch (error) {
                    setError(error);
                    console.error("Error fetching blogs:", error);
               } finally {
                    setLoading(false);
               }
          };

          fetchBlogs();
     }, [currentPage, pageSize, selectedCategory]);

     const handlePagination = (pageNumber) => {
          setCurrentPage(pageNumber);
     };

     const handleCategoryChange = (category) => {
          setSelectedCategory(category);
          setCurrentPage(1);
          setActiveCategory(category);
     };

     return (
          <>
               <div className="py-20">
                    <div>
                         <CategorySelection
                              onSelectCategory={handleCategoryChange}
                              selectedCategory={handleCategoryChange}
                              activeCategory={activeCategory}
                         />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-12">
                         {loading ? (
                              <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
                         ) : (
                              <>
                                   <BlogCards
                                        blogs={blogs}
                                        currentPage={currentPage}
                                        selectedCategory={selectedCategory}
                                        pageSize={pageSize}
                                   />
                                   <div>
                                        <SideBar />
                                   </div>
                              </>
                         )}
                    </div>
                    <div>
                         <Pagination
                              onPageChange={handlePagination}
                              currentPage={currentPage}
                              blogs={blogs}
                              pageSize={pageSize}
                         />
                    </div>
               </div>
          </>
     );
};

export default BlogPage;
