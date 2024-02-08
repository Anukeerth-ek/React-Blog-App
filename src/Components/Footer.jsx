import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

const Footer = () => {
     return (
          <div className="bg-gray-900">
               <div className="px-4 pt-16 mx-auto sm: max-w-xl md:max-w-full lg:max-w-screen-xl md:px-25 lg:px-4">
                    <div className="grid mb-8 lg:grid-cols-6">
                         <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
                              <div>
                                   <p className="font-medium tracking-wide text-gray-300">Category</p>
                                   <ul className="mt-2 space-y-2">
                                    <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:to-blue-700">News</a></li>
                                    <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:to-blue-700">World</a></li>
                                    <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:to-blue-700">Games</a></li>
                                    <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:to-blue-700">References</a></li>
                                   </ul>
                              </div>
                              {/* SECOND CATEGORY*/}
                              <div>
                                   <p className="font-medium tracking-wide text-gray-300">Section</p>
                                   <ul className="mt-2 space-y-2">
                                    <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:to-blue-700">Contact us</a></li>
                                    <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:to-blue-700">Be a affiliate</a></li>
                                    <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:to-blue-700">Trending</a></li>
                                    <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:to-blue-700">Help</a></li>
                                   </ul>
                              </div>
                                 {/* THIRD CATEGORY*/}
                              <div>
                                   <p className="font-medium tracking-wide text-gray-300">Section3</p>
                                   <ul className="mt-2 space-y-2">
                                    <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:to-blue-700">Contact us</a></li>
                                    <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:to-blue-700">Be a affiliate</a></li>
                                    <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:to-blue-700">Trending</a></li>
                                    <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:to-blue-700">Help</a></li>
                                   </ul>
                              </div>
                                 {/* FOURTH CATEGORY*/}
                              <div>
                                   <p className="font-medium tracking-wide text-gray-300">Section4</p>
                                   <ul className="mt-2 space-y-2">
                                    <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:to-blue-700">Contact us</a></li>
                                    <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:to-blue-700">Be a affiliate</a></li>
                                    <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:to-blue-700">Trending</a></li>
                                    <li><a href="/" className="text-gray-500 transition-colors duration-300 hover:to-blue-700">Help</a></li>
                                   </ul>
                              </div>
                                 {/* SUBSCRIPTION CATEGORY*/}
                              <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
                                   <p className="font-medium tracking-wide text-gray-300">SUBSCRIPTION</p>
                                    <form action="" className="mt-4 flex flex-col md:flex-row">
                                        <input type="email" name="email" id="email" className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 mb:mb-0 focus:border-purple-400 focus:ouline-none"/>
                                        <button type="submit" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition-duration-200 rounded shadow-md hover:bg-blue-800 focus:outline-none border">Subscribe</button>
                                    </form>
                                    <p className="mt-6 text-sm text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, libero alias sint corrupti totam ab mollitia suscipit modi autem aspernatur nihil. Nemo totam, nisi reprehenderit repellat aspernatur quo veniam exercitationem nam magni!</p>
                              </div>
                            
                         </div>
                    </div>

                    <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
                        <p className="text-sm text-gray-500">©Copyright 2024 | All right reserve</p>
                        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                            <a href="" className="text-gray-500 transition-all duration-300 hover:text-blue-500"><FaTwitter/></a>
                            <a href="" className="text-gray-500 transition-all duration-300 hover:text-blue-500"><FaLinkedinIn/></a>
                            <a href="" className="text-gray-500 transition-all duration-300 hover:text-blue-500"><FaGithub/></a>
                        </div>
                    </div>
               </div>
          </div>
     );
};

export default Footer;
