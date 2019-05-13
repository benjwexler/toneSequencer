import React, {useState} from 'react';


import './DrumMachine.css'


function DrumMachine({tracks, slider}) {
   
  return (
      <>
    <div className="drumMachineContainer w-100 m-auto" >
        {tracks}
    </div>

     {slider}
      
    </>
  );
}

export default DrumMachine;
