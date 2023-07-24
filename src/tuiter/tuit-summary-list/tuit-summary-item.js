import React from "react";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const TuitSummaryItem = (
 {
   tuit = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "tesla.png"
   }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
    <div className="col-9">
      <div className="wd-tuit-list-item-title">{tuit.topic}</div>
      <span className="wd-tuit-list-item-body">{tuit.userName} <i className="fa fa-check-circle"></i></span>
      <span className="wd-tuit-list-item-title"> - {tuit.time}</span>
      <div className="wd-tuit-list-item-body">{tuit.title}</div>
    </div>
    <div className="col-3 d-flex align-items-center justify-content-center">
        <img className="wd-explore-tuit-img" src={`${tuit.image}`} alt=""/>
    </div>
   </div>
  </li>
 );
};
export default TuitSummaryItem;

