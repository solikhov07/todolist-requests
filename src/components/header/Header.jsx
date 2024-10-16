import React, {useState} from 'react'
import c from './Header.module.css'
import logo from '../../assets/images/todolist-logo.webp'
import { data } from '../../jwt/data-json.js'
import { v4 as uuidv4 } from 'uuid'
import { NavLink } from 'react-router-dom'
import { MdClose, MdMenu } from "react-icons/md";
const Header = () => {
    const {header_nav_ul_options} = data
    const [navSidebarState, setNavSidebarState] = useState(false)
    return (
        <header>
         <div className={c.header_logo__wrapper}>
         <div className={c.header__logo}>
             <img src={logo} alt="" />
         </div>
         <strong className={c.header_text_logo}>Todolist</strong>
         </div>
         <i onClick={() => {
                     setNavSidebarState(true)
                 }} className={c.header_nav_btn}><MdMenu/></i>
         <nav style={navSidebarState ? {right: 0} : {right: -100+"%"}} className={c.header__nav}>
             <div className={c.header_nav_sidebar_close}>
                 <span onClick={() => {
                     setNavSidebarState(false)
                 }}><MdClose/></span>
             </div>
             <ul className={c.header_nav_ul__wrapper}>
                 {
                     header_nav_ul_options.map(e => <li className={c.header_nav_li} key={uuidv4()}><NavLink exact activeClassName={c.header_active_link} to={e.nav_link}>
                         <span>{e.title}</span> <span className={e.title.includes('Settings') ? `${c.animated_settings_icon}` : ""}>{e.icon}</span>
                     </NavLink>
                     </li>
                     )
                 }
             </ul>
         </nav>
        </header>
    )
}

export default Header