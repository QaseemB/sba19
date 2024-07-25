import mongoose from "mongoose";

import {Instruments}  from "../models/instruments.mjs";


const instrumentTest = [
  {
  
    model: "Akai Professional MPC X Standalone Sampler and Sequencer",
    price: `$ 2,499`,
    weight: "12.5 lbs",
    dimensions:`1,018 (W) x 329 (D) x 102 (H) mm`
  
  },
  {
    
    model: "dx-7",
    price: `$ 1,500`,
    weight: `14.2kg`,
    dimensions:`1,018 (W) x 329 (D) x 102 (H) mm`,
  },
  {
 
    model: "Hammond SKX Pro Dual 61 Stage Keyboard/Organdx-",
    price: `$ 3,995`,
    weight: "37.25lbs",
    dimensions:`7.20 (H) x 39.44(W)x 18.66(D)`,
  },
  {
    
    model: "Epiphone Dave Grohl DG-335 Semi-hollowbody Electric Guitar - Pelham Blue",
    price: `$ 1,299`,
    weight: "8lbs",
    dimensions:`7.20 (H) x 39.44(W)x 18.66(D)`,
    neck: "45"
   
  },

  {
   
    model: "Yamaha MODX8+ 88 GHS-weighted Key Synthesizer",
    price: `$ 2,199`,
    weight: "37.25lbs",
    dimensions:`6.3" (H) x 52.5"(W)x 15.9"(D)`,
  },
  {

    model: "Moog One 16-voice Analog Synthesizer",
    price: `$ 9,999`,
    weight: "45lbs",
    dimensions:`7.20" (H) x 42"(W)x 20"(D)`,
  },

  {

    model: "Novation MiniNova 37-key Synthesizer with Vocoder",
    price: `$ 399.`,
    weight: "37.25lbs",
    dimensions:`2.95" (H) x 23.2"(W)x 9"D)`,
  },

  {
    model: "Polyend Tracker+ 16-track Stereo Sampler, Drum Machine, and Synthesizer MonoPoly 4-voice Analog Synthesizer",
    price: `$ 799`,
    weight: "2.65lbs",
    dimensions:`1.3""(H) x 11""(W)x 8""(D)`,
  },

  {
    model: "Elektron Digitakt II 16-track Stereo Drum Computer and Sampler",
    price: `$ 999`,
    weight: "3lbs",
    dimensions:`2.5" (H) x 8.5"(W)x 7.2"(D)`,
  },

  {

    model: "Roland V-Drums TD-17KVX Generation 2 Electronic Drum Set",
    price: `$ 3,9950`,
    weight: "37.25lbs",
    dimensions:`7.20 (H) x 39.44(W)x 18.66(D)`,
  },

  {

    model: "Akai Professional MPC One+ Standalone Sampler and Sequencer",
    price: `$ 699`,
    weight: "4lbs",
    dimensions:`7.20 (H) x 39.44(W)x 18.66(D)`,
  },

  {
    model: "Erica Synths Perkons HD-01 Drum Machine and Rhythm Synthesizer - Black",
    price: `$ 2059`,
    weight: "8.15lbs",
    dimensions:`3.20" (H) x 17.5"(W)x 12.44"(D)`,
  },

  {
    model: " Korg KR-11 Compact Rhythm Box",
    price: `$ 119`,
    weight: "9.25lbs",
    dimensions:`1.20" (H) x 6"(W)x 4.66"(D)`,

  },
];


// const storingInstruments = async () =>{
//   await Instruments.deleteMany({})
//    .then(()=>{
//      console.log("Instruments has been cleared")
//    })
//    .catch((error)=>{
//      console.log('error deleting the Instruments')
//    })
//  await Instruments.insertMany(instrumentTest)
//    .then(()=> {
//     console.log('Instruments has been saved')
//      })
//    .catch ((error)=>{
//    console.error('Error saving Instruments', error)
//  });
//  }

//  storingInstruments();
export {instrumentTest}