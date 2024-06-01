import { CiUser } from "react-icons/ci";
import { BsBookmarks } from "react-icons/bs";
import { MdOutlineAutoStories } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";


export const userDashboardProfile = [
    {
      id: 0,
      icon: CiUser,
      info: "Profile",
    },
    {
      id: 1,
      icon: BsBookmarks,
      info: "Library",
    },
    {
      id: 2,
      icon: MdOutlineAutoStories,
      info: "Stories",
    },
    {
      id: 3,
      icon: IoStatsChartOutline,
      info: "Stats",
    }
  ];

export const settingOptions = [
    {
        content: "Settings"
    },
    {
        content: "Refine Recommendations"
    },
    {
        content: "Manage Publications"
    },
    {
        content: "Help"
    },
]

export const userMemberShips = [
    {
        content: "Become a NativeDev member",
        icon: true,
    },
    {
        content: "Create a mastodon account",
        icon: false,
    },
    {
        content: "Apply for author verification",
        icon: false,
    },
    {
        content: "Apply for partner program",
        icon: false,
    },
    {
        content: "Gift a membership",
        icon: false,
    },
]