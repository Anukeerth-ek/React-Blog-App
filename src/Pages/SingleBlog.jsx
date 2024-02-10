import React from 'react'
import { useLoaderData } from 'react-router-dom'
import {FaClock, FaUser} from 'react-icons/fa'
import SideBar from '../Components/SideBar'


const SingleBlog = () => {
    const data = useLoaderData()
    console.log("data", data)
    const {title, image, category, author, published_date, reading_time, content} = data[0]
  return (
    <div className="px-10 py-12">
      {/* BLOG DETAILS */}
      <div className='mx-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
        <div className='lg:w-3/4 mx-auto'>
            <div className="w-12/12">
                <img src={image} className='w-full mx-auto rounded '/>
            </div>
            <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
            <p className='mb-3 text-gray-600'><FaUser className='inline-flex item mr-2'/>{author} | {published_date}</p>
            <p className='mb-3 text-gray-600'><FaClock className='inline-flex item mr-2'/>{reading_time}</p>
            <p className='text-base text-grey-500 mb-6'>{content}</p>
            {/* <div className='text-base text-gray-500'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, quam. Odio ratione eveniet totam accusantium debitis voluptatum dolore eligendi soluta maxime assumenda?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias soluta et magnam ducimus blanditiis optio vel obcaecati nesciunt voluptates, quidem exercitationem nobis, laudantium distinctio! Facere neque consequuntur aspernatur aperiam sapiente, iure sequi exercitationem tenetur rerum libero in accusamus magni. Iste sed minima ipsa eum officiis similique, nam nostrum quo a sequi dolorum, eligendi dolorem aspernatur!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, impedit non asperiores delectus pariatur nihil. Doloremque, amet? Necessitatibus provident adipisci modi rem amet ipsum officiis minus, incidunt harum, veritatis reprehenderit quo temporibus, similique placeat deserunt aspernatur. Quas totam impedit consequatur distinctio molestias laudantium labore nostrum sit atque numquam, similique a voluptate minus excepturi ipsa. At?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quidem culpa consequuntur ipsam aliquid natus ullam distinctio exercitationem aperiam, laudantium saepe iure voluptatem praesentium at mollitia fugit id nam. Dolorum corporis nihil provident suscipit excepturi aliquid? Eum nisi qui minima, quo culpa dignissimos voluptatibus aspernatur ipsum id numquam quasi ad quod doloribus sit, quos ullam?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illo officiis amet ab hic accusantium voluptatibus, facilis delectus, voluptate iste numquam ipsam recusandae aspernatur! Est, officiis dignissimos impedit reiciendis inventore ratione distinctio quasi quam beatae officia dicta similique consequatur? Quos incidunt similique eligendi asperiores. Unde distinctio reprehenderit obcaecati optio quasi. Vero voluptatem architecto nihil dignissimos.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad natus delectus harum explicabo tempore at. Fugiat iste quidem consequatur nisi quae pariatur dolore error. Ullam architecto nemo odit, eveniet minima et? Dolores soluta eum repudiandae odio tempora, eveniet ab sunt. Quod eos corrupti, amet quidem libero dignissimos odio explicabo illum nisi nihil id fuga minima.</p>
            </div> */}
        </div>

        <div className='lg:w-1/2'>
            <SideBar/>
        </div>

      </div>
    </div>
  )
}

export default SingleBlog