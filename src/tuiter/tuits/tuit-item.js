import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuit-details-reducer";

const TuitItem = ({tuitDetails}) => {

  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }

 return(
  <li className="list-group-item">
   <div className="row">
    <div className="col-3">
        <img className="wd-explore-tuit-img" src={`${tuitDetails.image}`} alt=""/>
    </div>
    <div className="col-9">
      <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuitDetails._id)}></i>
      <span className="wd-tuit-list-item-title">{tuitDetails.userName} <i className="fa fa-check-circle"></i></span>
      <span className="wd-tuit-list-item-body"> {tuitDetails.handle} - {tuitDetails.time} </span>
      <div className="wd-tuit-list-item-body">{tuitDetails.tuit}</div>
    </div>
   </div>
   <div className="row">
    <div className="col-3"></div>
    <div className="col-2">
      <button className="btn"><i className="fa fa-comment"></i></button> {tuitDetails.replies}
    </div>
    <div className="col-2">
      <button className="btn"><i className="fa fa-retweet"></i></button> {tuitDetails.retuits}
    </div>
    <div className="col-2">
      <button className="btn"><i className="fa fa-heart"></i></button> {tuitDetails.likes}
    </div>
    <div className="col-2">
      <button className="btn"><i className="fa fa-upload"></i></button>
    </div>
    <div className="col-1"></div>
   </div>
  </li>
 );
};
export default TuitItem;

