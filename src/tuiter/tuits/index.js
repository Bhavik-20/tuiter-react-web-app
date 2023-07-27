import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
  const tuitDetailsArray = useSelector(state => state.tuitDetails.tuitsArray);

 return(
  <div>
    <ul className="list-group">
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