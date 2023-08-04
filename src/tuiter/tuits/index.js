import React, {useEffect} from "react";
import TuitItem from "./tuit-item";
import {useDispatch, useSelector} from "react-redux";
import { findTuitsThunk } from "../services/tuits-thunks";

const TuitsList = () => {
  const {tuitDetailsArray, loading} = useSelector(state => state.tuitDetails);
   
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(findTuitsThunk())
    }, [])

 return(
  <div>
    <ul className="list-group">
        { loading &&
          <li className="list-group-item">
            Loading...
          </li>
        }

        {
          tuitDetailsArray.map(tuitDetails =>
          <TuitItem
            key={tuitDetails._id}
            tuitDetails={tuitDetails}/>
          )
        }
    </ul>
  </div>
 );
};
export default TuitsList;