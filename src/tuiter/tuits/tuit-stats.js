import React, { useState } from "react";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";


const TuitStats = ({ tuitDetails }) => {
    const dispatch = useDispatch();

    const handleLikeButtonClick = () => {
        if (!tuitDetails.liked) {
            
            dispatch(updateTuitThunk({ ...tuitDetails, likes: tuitDetails.likes + 1, liked: true}));

        } else {
            
            dispatch(updateTuitThunk({ ...tuitDetails, likes: tuitDetails.likes - 1, liked: false}));

        }
    };

    const handleDislikeButtonClick = () => {
        if (!tuitDetails.disliked) {
            
            dispatch(updateTuitThunk({ ...tuitDetails, dislikes: tuitDetails.dislikes + 1, disliked: true}));

        } else {
            
             dispatch(updateTuitThunk({ ...tuitDetails, dislikes: tuitDetails.dislikes - 1, disliked: false}));


        }
    };

    return (
        <div className="row">
            <div className="col-2"></div>
            <div className="col-2">
            <button className="btn"><i className="fa fa-comment"></i></button> 
            <span className="d-none d-lg-inline-block">{tuitDetails.replies}</span>
            </div>
            <div className="col-2">
            <button className="btn"><i className="fa fa-retweet"></i></button> 
            <span className="d-none d-lg-inline-block">{tuitDetails.retuits}</span>
            </div>
            <div className="col-2">
            <button className="btn" onClick={handleLikeButtonClick}><i className={`fa fa-heart ${tuitDetails.liked ? "text-primary" : ""}`}></i></button> 
            <span className="d-none d-lg-inline-block">{tuitDetails.likes}</span>
            </div>
            <div className="col-2">
                <button className="btn" onClick={handleDislikeButtonClick}><i className={`fa fa-thumbs-down ${tuitDetails.disliked ? "text-danger" : ""}`}></i></button> 
                <span className="d-none d-lg-inline-block">{tuitDetails.dislikes}</span>
            </div>
            <div className="col-2">
            <button className="btn"><i className="fa fa-upload"></i></button>
            </div>
            
        </div>
    );
}

export default TuitStats;