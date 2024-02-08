import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home.jsx';
import Blog from './Pages/Blog.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Service from './Pages/Service.jsx';
import Login from './Pages/Login.jsx';
import SingleBlog from './Pages/SingleBlog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
     {
       path: "/",
       element: <Home/>,     
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/service",
        element: <Service/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/blog/:id",
        element: <SingleBlog/>,
        loader : ({params})=> fetch(`http://localhost:5000/blogs/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />

  </React.StrictMode>,
)
