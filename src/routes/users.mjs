import express from 'express';
const router = express.Router();
import { query, validationResult, body, matchedData} from "express-validator";
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
  if (findUserIndex === -1) return next(error(404, 'User not found'));
  req.findUserIndex = findUserIndex;
  next()
}
router
  .route("/")
  .get(query('filter')
    .isString()
    .notEmpty()
    .withMessage(`cant leave this empty my guy`)
    .isLength({min: 3, max: 20})
    .withMessage(`parameter must be at least 3-20 characters :-)`),
  (req, res) => {
    const result = validationResult(req)
    console.log(result)
    const {
      query: {filter, value},
    } = req
    if (filter && value)
        return res.send(users.filter((user)=> user[filter].includes(value)));
      return res.json(users)
  })
    .post(
    [ 

    body('name')
     .notEmpty()
     .withMessage(`name cannot be empty`)
     .isLength({min: 3, max: 25})
     .withMessage('name needs to be bewteen 3-20')
     .isString()
     .withMessage('unable to use that name, it must be a string'),

    body(`username`)
      .notEmpty()
      .withMessage(`the username cant be empty my guy`)
      .isLength({min: 5, max: 25})
      .withMessage(`username nedds to be 5-25 characters`)
      .isString()
      .withMessage(`cant use that username it must be a string bro`),

    body('email')
      .isEmail()
      .withMessage('Invalid email format')
      .normalizeEmail(),

     body('password')
      .isLength({min: 5, max: 30})
      .withMessage(`password nedds to be 5-30 characters`),
     
    ],
    (req,res) =>{
      const result = validationResult(req);
      console.log(result)
      console.log('req body:',req.body)

      if(!result.isEmpty())
        return res.status(400).send({errors: result.array()});

      const data = matchedData(req)
      console.log(data);
      const newuser = {id: users[users.length -1].id + 1, ...data
      }
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


export {router}