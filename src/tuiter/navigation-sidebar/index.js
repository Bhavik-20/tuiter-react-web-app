import React from "react";
import { Link, useLocation } from "react-router-dom";
const NavigationSidebar = () => {
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile",  "more"];
 const icons = ["house", "hash", "bell", "envelope", "bookmark", "card-list", "person", "three-dots"];
 return (
   <div className="list-group">
     {links.map((link, index) => 
         
         <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
          <span><i className={`bi bi-${icons[index]} me-2`}/></span> 
          <span className="d-none d-xl-inline-block">{link}</span>
         </Link>
     )}
   </div>
 );
};
export default NavigationSidebar;