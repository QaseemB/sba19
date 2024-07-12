import express from 'express';
const router = express.Router();

import {studioeq} from '../data/studioeq.mjs';

router
  .route("/")
  .get((req, res) => {
    res.json(studioeq);
  })

  export{router}