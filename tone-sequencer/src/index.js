import React from "react";
import ReactDOM from "react-dom";
import App from "./Features/App/components/App";
import Tone from "tone";

console.log("TEST");
// var synth = new Tone.Synth().toMaster();
// synth.triggerAttackRelease("C4", "8n");

// window.addEventListener("DOMContentLoaded", event => {
//   document.querySelector("button").addEventListener("click", () => {

//     const timeDivision = 32;
//     class Track {
//       constructor(name, soundfile, padsOn) {
//         this.name = name;
//         this.soundfile = soundfile;
//         this.padsOn = padsOn
//       }
//     }

//     const kick = new Track("Kick", "./Kick.wav", [
//         true,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         true,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//       ]);
//     const hat = new Track("Hat", "./hat.wav", [
//         true,
//         false,
//         false,
//         false,
//         true,
//         false,
//         false,
//         false,
//         true,
//         false,
//         false,
//         false,
//         true,
//         false,
//         false,
//         false,
//         true,
//         false,
//         false,
//         false,
//         true,
//         false,
//         false,
//         false,
//         true,
//         false,
//         false,
//         false,
//         true,
//         false,
//         false,
//         false,
       
   
//       ]);

//       const arr32 = [];
//       for(let i=0; i<32; i++) {
//           arr32.push(i)
//       }
//     const tracks = [kick, hat];
//     const soundfilesObj = {};

//     tracks.forEach((track, i) => {
//       soundfilesObj[i] = tracks[i].soundfile;
//     });

//     const sampler = new Tone.Players(soundfilesObj, () => {
//       var seq = new Tone.Sequence(
//         function(time, index) {
//           tracks.forEach((track, i) => {
//             if (track.padsOn[index] && index % (32 / timeDivision) === 0) {
//               sampler.get(`${i}`).start();
//             }
//           });
//         },arr32,
//         "32n"
//       );
//       seq.start();
//     }).toMaster();

//     //   sampler.attack = 1

//     // sampler.Context()
//     // player.load()
//     Tone.Transport.start();

//     // console.log(player.loaded)

//     // console.log(player)

//     // Tone.start()
//   });
// });

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA