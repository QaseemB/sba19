import express from 'express';
const router = express.Router();

import {instrument} from "../data/instrument.mjs"
import {error} from '../utilties/error.mjs'


router
  .route("/")
  .get((req, res) => {
    res.json(instrument);
  })
//   .post((req, res) => {
//     if (req.body.name && req.body.username && req.body.email) {
//       if (users.find((u) => u.username == req.body.username)) {
//         res.json({ error: "Username Already Taken" });
//         return;
//       }

//       const products = {
//         id: users[users.length - 1].id + 1,
//         name: req.body.name,
//         username: req.body.username,
//         email: req.body.email,
//       };
      
//       users.push(user);
//       res.json(users[users.length - 1]);
//     } else res.json({ error: "Insufficient Data" });
//   });


//   model: "Akai Professional MPC X Standalone Sampler and Sequencer",
//   price: `$ 2,499`,
//   weight: "12.5 lbs",
//   Compatibility: `VST compatible (controller mode)`,
//   Pads: `16 x Velocity/pressure-sensitive RGB pads, Full-sized`,
//   keyboard: "61 keys",
//   Dimensions:`1,018 (W) x 329 (D) x 102 (H) mm`


export {router}