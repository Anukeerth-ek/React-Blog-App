import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";
import ReactLoading from "react-loading";
import { ShimmerPostList } from "react-shimmer-effects";
import { Audio, Circles } from "react-loader-spinner";

const BlogPage = ({ type, color }) => {
     const [blogs, setBlogs] = useState([]);
     const [currentPage, setCurrentPage] = useState(1);
     const pageSize = 12;
     const [selectedCategory, setSelectedCategory] = useState(null);
     const [activeCategory, setActiveCategory] = useState(null);
     const [error, setError] = useState(null);
     const [loading, setLoading] = useState(false);
     const [page, setPage] = useState(1);
     const [spinner, setSpinner] = useState(true);

     // FUNCTION FOR INFINTE SCROLL

     const handleInfiniteScroll = async () => {
          const maxScrollHeight = 1268;
          console.log("window.innerHeight", window.innerHeight);
          console.log("documentElement.ScrollTop", document.documentElement.scrollTop);
          console.log("documentElement.ScrollHeight", document.documentElement.scrollHeight);
          try {
               if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                    setSpinner(true);
                    setCurrentPage((prevPage) => prevPage + 1);
               }
          } catch (error) {
               console.log("error", error);
          }
     };

     useEffect(() => {
          const fetchBlogs = async () => {
               setLoading(true);
               try {
                    const apiUrl = "/modern-react-js-blog-starter-files/api/blogsData.json";
                    let url = `${apiUrl}?page=${currentPage}&limit=${pageSize}`;
                    if (selectedCategory) {
                         url += `&category=${selectedCategory}`;
                    }
                    const response = await fetch(url);
                    if (!response.ok) {
                         throw new Error("Failed to fetch blogs");
                    }
                    const data = await response.json();
                    setBlogs((prevBlogs) => [...prevBlogs, ...data]); // Append new data to the existing list
                    setSpinner(false);
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

     // FOR INFINITE SCROLL
     useEffect(() => {
          window.addEventListener("scroll", handleInfiniteScroll);
          return () => window.removeEventListener("scroll", handleInfiniteScroll);
     }, []);

     // FOR SHIMMER EFFECT
     const [isShimmering, setIsShimmering] = useState(true);
     useEffect(() => {
          const shimmerTimeout = setTimeout(() => {
               setIsShimmering(false);
          }, 700);

          return () => {
               clearTimeout(shimmerTimeout); // Clear the timeout if component unmounts or if dependency changes
          };
     }, []);
     // FOR SHIMMER EFFECT

     // const handlePagination = (pageNumber) => {
     //      setCurrentPage(pageNumber);
     // };

     const handleCategoryChange = (category) => {
          setSelectedCategory(category);
          setCurrentPage(1);
          setActiveCategory(category);
     };

     return (
          <>
               <div className="py-20 mt-8">
                    {isShimmering && <ShimmerPostList postStyle="STYLE_ONE" col={3} row={5} gap={20} />}

                    {!isShimmering && (
                         <>
                              <div>
                                   <CategorySelection
                                        onSelectCategory={handleCategoryChange}
                                        selectedCategory={handleCategoryChange}
                                        activeCategory={activeCategory}
                                   />
                              </div>
                              <div className="flex flex-col lg:flex-row gap-1">
                                   {loading ? (
                                        <ReactLoading type={type} color={color} height={"20%"} width={"20%"} />
                                   ) : (
                                        <>
                                             <BlogCards
                                                  blogs={blogs}
                                                  currentPage={currentPage}
                                                  selectedCategory={selectedCategory}
                                                  pageSize={pageSize}
                                             />
                                             <div className="ml-1">
                                                  <SideBar />
                                             </div>
                                        </>
                                   )}
                              </div>
                              <div>
                                   {/* <Pagination
                              onPageChange={handlePagination}
                              currentPage={currentPage}
                              blogs={blogs}
                              pageSize={pageSize}
                         /> */}
                              </div>
                         </>
                    )}
               </div>
             {spinner &&   <Circles
                    height="80"
                    width="1280"
                    color="#0040AF"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
               />}
          </>
     );
};

export default BlogPage;
