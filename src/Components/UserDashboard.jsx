import { CiUser } from "react-icons/ci";
import { BsBookmarks } from "react-icons/bs";
import { MdOutlineAutoStories } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import { userDashboardProfile, userMemberShips, settingOptions } from "../utils/Data";
import { FaStar } from "react-icons/fa";
import { User, useAuth0 } from "@auth0/auth0-react";

const UserDashboard = ({user}) => {
    
    // lets destructure the autho 
    const {logout} = useAuth0()

     return (
          <div className="shadow-custom  bg-white">
               <div className=" text-sm font-semibold">
                    <div className="flex flex-col py-[16px] border-b-[1px]">
                         {userDashboardProfile.map((item) => (
                              <div
                                   key={item.id}
                                   className="py-[8px] px-[24px] flex items-center text-left justify-between "
                              >
                                   {/* Render the icon component */}
                                   <div className="flex items-center hover:text-black text-[#707070] cursor-pointer">
                                        <item.icon className="w-[24px] h-[24px]" />
                                        <p className="ml-2">{item.info}</p>
                                   </div>
                              </div>
                         ))}
                    </div>

                    <div className="py-[16px] border-b-[1px]">
                         {settingOptions.map((item, index) => (
                              <p className="py-[6px] px-[24px] hover:text-black text-[#707070] cursor-pointer">
                                   {item.content}
                              </p>
                         ))}
                    </div>

                    <div className="py-[16px] border-b-[1px]">
                         {userMemberShips.map((item, index) => (
                              <div className="flex items-center py-[6px] px-[24px] hover:text-black text-[#707070] cursor-pointer">
                                   <p className="mr-7">{item.content}</p>
                                   <span className="text-yellow-500">{item.icon && <FaStar/>}</span>
                                    
                              </div>
                         ))}
                    </div>
                    <div className="py-[16px]" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                       <div className="py-[6px] px-[24px]   text-[#707070] cursor-pointer">
                       <p className="mb-1 hover:text-black">Sign out</p>
                        <p>{user}</p>
                       </div>
                    </div>
               </div>
          </div>
     );
};

export default UserDashboard;
