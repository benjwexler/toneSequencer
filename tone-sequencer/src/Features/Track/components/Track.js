import React from "react";
import TrackButton from "./TrackButton";
import Pad from "../../Pad/components/Pad";
import "./Track.css";

function Track({name, trackNum, padQuantity, currentPad, handlePadClick, padsOn, onClick }) {

let pads = [];
for(let i=0; i<padQuantity; i++) {
    pads.push(<Pad padOn={padsOn[i]} trackNum={trackNum} handlePadClick={handlePadClick} padNum={i} currentPad={currentPad} key={i}/>)
}


  return ( 
  <div className="trackContainer w-100 m-auto d-flex">
      <TrackButton onClick={onClick} name={name} num={trackNum}/>
      <div className="padContainer d-flex flex-grow-1">
        {pads}  
      </div>
  </div>
  )
}

export default Track;
