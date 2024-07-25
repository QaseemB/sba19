import mongoose from "mongoose";

import {Instruments}  from "../models/instruments.mjs";


const instrumentTest = [
  {
    // id: 0o1,
    model: "Akai Professional MPC X Standalone Sampler and Sequencer",
    price: `$ 2,499`,
    weight: "12.5 lbs",
    dimensions:`1,018 (W) x 329 (D) x 102 (H) mm`
  
  },
  {
    // id: 0o2,
    model: "dx-7",
    price: `$ 1,500`,
    weight: `14.2kg`,
    dimensions:`1,018 (W) x 329 (D) x 102 (H) mm`,
  },
  {
    // id: 0o3,
    model: "Hammond SKX Pro Dual 61 Stage Keyboard/Organdx-",
    price: `$ 3,9950`,
    weight: "37.25lbs",
    dimensions:`7.20 (H) x 39.44(W)x 18.66(D)`,
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