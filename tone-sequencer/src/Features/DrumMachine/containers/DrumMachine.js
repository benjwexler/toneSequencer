import React, { useState, useEffect } from "react";
import DrumMachine from "../components/DrumMachine";
import Track from "../../Track/containers/Track";
import TrackClass from "../../Track/trackClass";
import Tone from "tone";
import Slider from "react-input-slider";

function DrumMachineContainer() {
  const kick = new TrackClass("Kick", "./samples/Kick.wav");
  const hat = new TrackClass("Hat", "./samples/hat.wav");
  const snare = new TrackClass("snare", "./samples/snare.wav");

  const [tracks, setTracks] = useState([kick, hat, snare]);
  const [currentPad, setCurrentPad] = useState(0);
  const [timeDivision, settimeDivision] = useState(16);
  const [tempo, setTempo] = useState({ y: 80 });
  const handlePadClick = ev => {
    const trackNum = ev.target.dataset.trackNum;
    const padNum = ev.target.dataset.padNum;

    console.log(
      "CLICKED!",
      ev.target.dataset.trackNum,
      ev.target.dataset.padNum
    );

    let newTracks = [...tracks];

    newTracks[trackNum].padsOn[padNum] = !newTracks[trackNum].padsOn[padNum];

    setTracks(newTracks);
  };



  useEffect(() => {
    document.querySelector("button").addEventListener("click", () => {
      console.log("Render");
      const arr32 = [];
      for (let i = 0; i < timeDivision; i++) {
        arr32.push(i);
      }
      const soundfilesObj = {};

      tracks.forEach((track, i) => {
        soundfilesObj[i] = tracks[i].soundfile;
      });

      const sampler = new Tone.Players(soundfilesObj, () => {
        var seq = new Tone.Sequence(
          function(time, index) {
            tracks.forEach((track, i) => {
              setCurrentPad(index);
              if (track.padsOn[index] && index % (16 / timeDivision) === 0) {
                sampler.get(`${i}`).start();
              }
            });
          },
          arr32,
          "32n"
        );
        seq.start();
      }).toMaster();
      Tone.Transport.start();
    });
  });

  useEffect(() => {
      console.log(tempo)
    Tone.Transport.bpm.value = tempo.y;
  }, [tempo]);

  const tracksArr = tracks.map((track, i) => {
    const { name, soundfile, padsOn } = track;
    //   console.log(name, soundfile, padsOn)
    return (
      <Track
        name={name}
        trackNum={i}
        currentPad={currentPad}
        soundfile={soundfile}
        padQuantity={timeDivision}
        padsOn={padsOn}
        key={name}
        handlePadClick={handlePadClick}
        // onClick={changeTempo}
      />
    );
  });
  return (
    <DrumMachine
      tracks={tracksArr}
      slider=<Slider
        axis="y"
        y={tempo.y}
        ymin={20}
        ymax={300}
        onChange={({ y }) => setTempo({ y: parseFloat(y.toFixed(2)) })}
      />
    />
  );
}

export default DrumMachineContainer;
