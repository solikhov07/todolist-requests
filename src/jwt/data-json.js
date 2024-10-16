import { AiOutlineFileDone } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
export const data = {
    header_nav_ul_options: [
        {
            nav_link: "/",
            title: "Home",
            icon : <FaHome/>
        },
        {
            nav_link: "/requests",
            title: "Done Tasks",
            icon : <AiOutlineFileDone/>
        },
        {
            nav_link: "/account",
            title: "Settings",
            icon: <IoSettings/>
        }
    ]
}