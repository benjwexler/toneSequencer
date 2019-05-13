import React from "react";
// import PadButton from "./PadButton";
import cx from "classnames";
import "./Pad.css";

function Pad({padNum, currentPad, trackNum, handlePadClick, padOn}) {
    let currentPadClass = { currentPadClass: padNum === currentPad };
    let padOnClass = { padOnClass: padOn }
  return ( 
  <div data-track-num={trackNum} data-pad-num={padNum} onClick={handlePadClick} className={cx("pad flex-grow-1 m-auto d-flex", currentPadClass, padOnClass)}>
  Hey
  </div>
  )
}

export default Pad;