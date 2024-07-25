
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import {Studio} from '../models/studioeq.mjs'
const studioeq = [
    {
        id: 0o1,
        model: "Neve 1073OPX 8-channel Microphone Preamp with Remote Control Software",
        price: `$ 3,995`,
        weight: "17.19 lbs",
        PreampType:` Solid State `,
        Channels: "8",
        Dimensions:`3.5" (H) x 14.7"(W)x 19.05(D)`,
      },
      {
        id: 0o2,
        model: "Avalon VT-737sp Tube Channel Strip",
        price: `$ 3,866`,
        weight: "37.25lbs",
        preampType:`Tube`,
        Channels: "1",
        Dimensions:`3.5" (H) x 19" (W)x 12"(D)`,
      },
      {
        id: 0o3,
        model: "Universal Audio Teletronix LA-2A Classic Leveling Amplifier",
        price: `$ 4,699`,
        weight: " 13 lbs. ",
        Type:`Optical`,
        Channels: "1",
        Dimensions:`5.25"(H) x 19"(W)x 7.25"(D)`,
      },
]

export {studioeq}