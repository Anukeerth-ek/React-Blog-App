import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards'
import Pagination from './Pagination'
import CategorySelection from './CategorySelection'
import SideBar from './SideBar'

const BlogPage = () => {
    const [blogs, setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 15
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [activeCategory, setActiveCategory] =useState(null)

    useEffect(()=> {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`
            if(selectedCategory) {
              url += `&category=${selectedCategory}`;

            }
            const response = await fetch(url)
            const data = await response.json()
            setBlogs(data)
            console.log("data", data)
        }
        fetchBlogs()
    }, [currentPage, pageSize, selectedCategory])

    const handlepagination = (pageNumber)=> {
        setCurrentPage(pageNumber)
    }
    const handleCategoryChange = (category)=> {
      setSelectedCategory(category)
      setCurrentPage(1)
      setActiveCategory(category)
    }

  return (
    <>
    <div className='py-20'>
      
      <div >
        <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={handleCategoryChange} activeCategory={activeCategory}/>
      </div>
      {/* BLOGCARDS SECTION */}
      <div className='flex flex-col lg:flex-row gap-12'>
        <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>
        {/* for side bar */}
        <div>
        <SideBar/>
        </div>
      </div>
      {/* PAGINATION SECTION */}
      <div>
        <Pagination onPageChange={handlepagination} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
      </div>

    </div>
    </>
  )
}

export default BlogPage;