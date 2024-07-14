import express from 'express';
const router = express.Router();

import {instrument} from "../data/instrument.mjs"
import {error} from '../utilties/error.mjs'

const resolveIndexbyInstID = (req,res,next)=>{
  const {body, 
      params: {id}
    } = req;
  const parsedID = parseInt(id);
  if(isNaN(parsedID)) return res.sendStatus(400)
  const findInstIndex = instrument.findIndex((s)=> s.id === parsedID);
  if (findInstIndex === -1) return res.sendstatus(404);
  req.findInstIndex = findInstIndex;
  next()
}

router
  .route("/")
  .get((req, res) => {
    res.json(instrument);
  })
  .post((req,res)=>{
    console.log(req.body);
    const {body} = req;
    const newInstrument = {id: instrument[instrument.length-1].id + 1, ...body};
    instrument.push(newInstrument);
    return res.status(201).send(newInstrument)
  })

  router
    .route("/:id")
    .get((req,res)=>{
      const {body, 
        params: {id}
      } = req;
      const inst = instrument.find((u) => u.id == id);
        if(inst) res.json(inst);
        else(next)
    })
    .patch(resolveIndexbyInstID, (req,res)=>{
      const { body, findInstIndex} = req;
      instrument[findInstIndex] = {...instrument[findInstIndex],...body};
      console.log(instrument[findInstIndex])
      return res.sendStatus(204);
    })
    .delete(resolveIndexbyInstID, (req,res)=>{
      const { body, findInstIndex} = req;
      instrument[findInstIndex] = {...instrument[findInstIndex],...body};
      instrument.splice(findInstIndex,1);
      return res.sendStatus(200)
    })



export {router}