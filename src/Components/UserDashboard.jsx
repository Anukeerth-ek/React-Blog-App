import { CiUser } from "react-icons/ci";
import { BsBookmarks } from "react-icons/bs";
import { MdOutlineAutoStories } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import { userDashboardProfile } from "../utils/Data";
// box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

const UserDashboard = () => {
     return (
          <div className="shadow-custom  bg-white">
               <div>
                    <div>
                         <div className="flex flex-col py-[16px]">
                              {userDashboardProfile.map((group, index) => (
                                   <div key={index} className="flex flex-col">
                                        {group.map((item, id) => (
                                             <>
                                             <div
                                                  key={id}
                                                  className=" flex items-center "
                                             >
                                                  {/* Render the icon component */}
                                                  <div className="flex hover:text-black text-[#707070] cursor-pointer py-[8px] px-[24px]">
                                                       {item.icon && <item.icon className="w-[24px] h-[24px]" />}
                                                       <p className="ml-2">{item.info}</p>
                                                  </div>
                                             </div>
                                                 <div >
                                                 <div>
                                                       <p >{item.content}</p>
                                                  </div>
                                                 </div>
                                             </>
                                        ))}
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default UserDashboard;
