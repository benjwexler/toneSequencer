import React from "react";
import "./Track.css";

function TrackButton({num, name, onClick}) {
  return ( 
  <div onClick={onClick} className="trackButton mr-1 position-relative d-flex">
     <div className="trackNum position-absolute">{num}</div>
     <div className="m-auto">{name}</div>
  </div>
  )
}

export default TrackButton;
