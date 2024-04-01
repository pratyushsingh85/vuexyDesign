import { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaShippingFast,
    FaRegChartBar,
    FaBook,
    FaShoppingBag,
    FaThLarge
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}:any) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaThLarge/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/eCommerce",
            name:"ECommerce",
            icon:<FaShoppingBag/>
        },
        {
            path:"/academy",
            name:"Academy",
            icon:<FaBook/>
        },
        {
            path:"/logisticks",
            name:"Logisticks",
            icon:<FaShippingFast/>
        },
    ]
    return (
        // <div className="container">
        <div>
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" >
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>

           <main style={{ marginLeft: isOpen ? "200px" : "50px", padding:"10px 0px 0px ",    transition: "margin-left 0.5s", width: `calc(100% - ${isOpen ? "200px" : "50px"})`, minHeight: `calc(100vh - 50px)` }}>
  {children}
</main>

        </div>
    );
};

export default Sidebar;