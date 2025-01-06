import { AiOutlineFileDone } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import carousel_todolist_01 from '../assets/images/todo-list-01.jpg'
import carousel_todolist_02 from '../assets/images/todo-list-02.jpg'
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
                heading: "This streamlined process empowers users to stay organized and efficient, helping them maintain focus on what truly matters without getting bogged down by complicated setups or technical barriers",
                url:carousel_todolist_01
            },
            {
                heading: "The goal is to provide support that feels intuitive, making the learning process as smooth and efficient as possible while minimizing the need for constant clarification or assistance",
                url: carousel_todolist_02
            },
            {
                heading:"By focusing on intuitive interfaces and streamlined functionality, the platform allows users to accomplish tasks quickly and efficiently",
                url:carousel_todolist_03
            }
        ]
    }
} 
export default obj