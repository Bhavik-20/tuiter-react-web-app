import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
  // Working
  const tuitDetailsArray = useSelector(state => state.tuitDetails.tuitDetails);

  // const { tuits } = useSelector(state => state.tuits)
  // const whoArray = useSelector((state) => state.who);

 return(
  <div>
    <h1>Home</h1>
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