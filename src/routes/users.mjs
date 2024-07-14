import express from 'express';
const router = express.Router();

import {users} from '../data/users.mjs';
import {error} from '../utilties/error.mjs'

const resolveIndexByUserID = (req,res,next)=>{
  const {
    body,
    params: {id},
  } = req;
  const parsedId = parseInt(id);
  if(isNaN(parsedId)) return res.sendstatus(400);
  const findUserIndex = users.findIndex((user) => user.id === parsedId);
  if (findUserIndex === -1) return res.sendStatus(404);
  req.findUserIndex = findUserIndex;
  next()
}

router
  .route("/")
  .get((req, res) => {
    res.json(users);
  })
    .post((req,res) =>{
      console.log(req.body);
      const {body} = req;
      const newuser = {id: users[users.length -1].id + 1, ...body}
      users.push(newuser);
      return res.status(201).send(newuser)
    })
    .delete((req, res, next) => {
      const user = users.find((u, i) => {
        if (u.id == req.params.id) {
          users.splice(i, 1);
          return true;
        }
      });
  
      if (user) res.json(user);
      else next();
    });
    

    router
      .route("/:id")
      .get((req,res) => {
        const user = users.find((u) => u.id == req.params.id);
        if(user) res.json(user);
        else(next)
      })
      .patch(resolveIndexByUserID,(req,res) =>{
      const { body, findUserIndex } = req;
      users[findUserIndex] = {...users[findUserIndex], ...body};
      return res.sendStatus(204)
    })
    .delete( resolveIndexByUserID,(req,res,next)=>{
      const { body,findUserIndex } = req;
      users[findUserIndex] = {...users[findUserIndex], ...body};
      users.splice(findUserIndex, 1)
      return res.sendStatus(200)
    })
  // .post((req, res) => {
  //   if (req.body.name && req.body.username && req.body.email) {
  //     if (users.find((u) => u.username == req.body.username)) {
  //       res.json({ error: "Username Already Taken" });
  //       return;
  //     }

  //     const user = {
  //       id: users[users.length - 1].id + 1,
  //       name: req.body.name,
  //       username: req.body.username,
  //       email: req.body.email,
  //     };

  //     users.push(user);
  //     res.json(users[users.length - 1]);
  //   } else res.json({ error: "Insufficient Data" });
  // });


export {router}