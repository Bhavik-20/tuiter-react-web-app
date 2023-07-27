import React from "react";

const WhoToFollowListItem = ({who}) => {
 return(
  <li className="list-group-item">
    <div className="row">
        <div className="col-2">
            <img className="wd-explore-follow-sugg-pic" src={`${who.avatarIcon}`} alt=""/>
        </div>
        <div className="col-7">
            <div>{who.userName} <i className="fa fa-check-circle"></i></div>
            <div>@ {who.handle} </div>
        </div>
        <div className="col-3">
            <button className="btn btn-primary rounded-pill float-end">Follow</button>
        </div>
    </div>
  </li>
 );
};
export default WhoToFollowListItem;