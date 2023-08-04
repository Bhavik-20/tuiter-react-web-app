import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile",  "more"];
 const icons = ["house", "hash", "bell", "envelope", "bookmark", "card-list", "person", "three-dots"];
 const { currentUser } = useSelector((state) => state.user);

 return (
   <div className="list-group">
     {links.map((link, index) => 
         
         <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
          <span><i className={`bi bi-${icons[index]} me-2`}/></span> 
          <span className="d-none d-xl-inline-block">{link}</span>
         </Link>
      )}
      {!currentUser && 
      <Link className="list-group-item" to="/tuiter/login">
        <span><i className="bi bi-box-arrow-in-right me-2"/></span> 
        <span className="d-none d-xl-inline-block">Login</span>
      </Link>}
      {!currentUser && 
       <Link className="list-group-item" to="/tuiter/register">
        <span><i className="bi bi-person-lines-fill me-2"/></span> 
        <span className="d-none d-xl-inline-block">Register</span>
      </Link>}
    
   </div>
 );
};
export default NavigationSidebar;