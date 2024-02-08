import React from 'react'
import Banner from '../Components/Banner'
import BlogPage from '../Components/BlogPage'

const Home = () => {
  return (
    <div>
  <Banner/>
  <div className='max-w-7xl mx-auto '>
    <div className="relative bottom-10">

    <BlogPage/>
    </div>
  </div>
    </div>
  )
}

export default Home