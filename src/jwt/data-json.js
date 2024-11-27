import { AiOutlineFileDone } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import carousel_todolist_01 from '../assets/images/todo-list-01.jpg'
import carousel_todolist_02 from '../assets/images/todo-list-02.webp'
import carousel_todolist_03 from '../assets/images/todo-list-03.webp'
const obj = {
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
    ],
    main:{
        carousel_images: [
            {
                heading: "Easy to create tasks",
                url:carousel_todolist_01
            },
            {
                heading: "Understandable instructions",
                url: carousel_todolist_02
            },
            {
                heading:"Convenient use",
                url:carousel_todolist_03
            }
        ]
    }
} 
export default obj