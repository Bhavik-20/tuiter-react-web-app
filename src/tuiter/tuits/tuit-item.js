import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuit-details-reducer";
import TuitStats from "./tuit-stats";

const TuitItem = ({tuitDetails}) => {

  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }

 return(
  <li className="list-group-item">
   <div className="row">
    <div className="col-2">
        <img width={70} className="img-fluid mx-auto d-block rounded-circle" src={`${tuitDetails.image}`} alt=""/>
    </div>
    <div className="col-10">
      <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuitDetails._id)}></i>
      <span className="wd-tuit-list-item-title">{tuitDetails.userName} <i className="fa fa-check-circle"></i></span>
      <span className="wd-tuit-list-item-body"> {tuitDetails.handle} - {tuitDetails.time} </span>
      <div className="wd-tuit-list-item-body">{tuitDetails.tuit}</div>
    </div>
   </div>
   <TuitStats key={tuitDetails._id} tuitDetails={tuitDetails} />
  </li>
 );
};
export default TuitItem;

