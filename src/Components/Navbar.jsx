import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import Model from "./Model";

const Navbar = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [isModelOpen, setIsModelOpen] = useState(false)

     const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
     };

     const navItems = [
          { path: "/", link: "Home" },
          { path: "/about", link: "About" },
          { path: "/blog", link: "Blog" },
          // { path: "/service", link: "Service" },
          { path: "/contact", link: "Contact Us" },
     ];

     // MODAL DETAIL
     const openModel = ()=> {
          setIsModelOpen(true)

     }
     const closeModel = ()=> {
          setIsModelOpen(false)
     }
     return (
          <header className="bg-white fixed top-0 left-0 right-0 z-10" >
               <nav className="py-4 px-8 max-w7xl mx-auto flex justify-between items-center">
                    <a href="/" className="text-3xl text-blue-800">
                        Native<span className="text-blue-400">DevDiary</span>
                    </a>

                    {/* FOR LARGE DEVICES  */}
                    <ul className="md:flex gap-12 text-lg hidden">
                         {navItems.map(({ path, link }) => (
                              <li key={link}>
                                   <NavLink
                                        className={({ isActive, isPending, isTransitioning }) =>
                                             [
                                                  isPending ? "pending" : "",
                                                  isActive ? "active" : "",
                                                  isTransitioning ? "transitioning" : "",
                                             ].join(" ")
                                        }
                                        to={path}
                                   >
                                        {" "}
                                        {link}
                                   </NavLink>
                              </li>
                         ))}
                    </ul>

                    {/* MENU ICONS */}
                    <div className="lg:flex gap-4 items-center hidden">
                         <a href="/" className="opacity-60 hover:opacity-100 text-2xl">
                              <FaGithub />
                         </a>
                         <a href="/" className="opacity-60 hover:opacity-100 text-2xl">
                              <FaLinkedin />
                         </a>
                         <a href="/" className="opacity-60 hover:opacity-100 text-2xl ">
                              <FaTwitter/>
                         </a>
                         <button className=" border-2 border-blue-400 px-14 py-2 bg-blue-100 hover:bg-blue-800 hover:text-white hover: font-medium ease-in duration-300 rounded-md ml-6">
                              Login
                         </button>
                    </div>

                    {/* <Model isOpen = {isModelOpen} onClose={closeModel}/> */}

                    {/* FOR MOBILE DEVICES */}
                    <div className="md:hidden z-10">
                         <button onClick={toggleMenu}>
                              {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu className=" w-5 h-5 " />}
                         </button>
                    </div>
               </nav>
               {/* MENU FOR MOBILE SCREEN */}
               <ul className={`bg-white md:hidden gap-12 text-lg block space-y-4 px-5 py-6 mt-14 ${isMenuOpen ? 'fixed top-0 left-0 w-full transition-all ease-out duration-150' : 'hidden' }`}>
                    {navItems.map(({ path, link }) => (
                         <li key={link}>
                              <NavLink onClick={toggleMenu} to={path}> {link}</NavLink>
                         </li>
                    ))}
               </ul>
          </header>
     );
};

export default Navbar;
