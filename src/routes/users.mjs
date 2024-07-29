import express from 'express';
const router = express.Router();
import { query, validationResult, body, matchedData} from "express-validator";
import {users} from '../data/users.mjs';
import {error} from '../utilties/error.mjs'
import { USERS } from "../models/users.mjs";
import mongoose from "mongoose";

const resolveIndexByUserID = async (req,res,next)=>{
  const {
    body,
    params: {id},
  } = req;
  // const parsedId = parseInt(id);
  if(!mongoose.Types.ObjectId.isValid(id)) 
    return res.sendstatus(400);
  try {const findUser = await USERS.findById(id);
    if (!findUser) return next(error(404, 'User not found'));
  req.findUser = findUser;
  next()
  } catch (err){
    next(error(500, `Internal server error`))
  }

};
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
    async (req,res)=> {
      const result = validationResult(req);
      console.log(result)
      console.log('req body:',req.body)

      if(!result.isEmpty())
        return res.status(400).send({errors: result.array()});

      const data = matchedData(req);
      console.log(data);

      let newUser;
    
      const saveNewUser = async ()=> {
        try {newUser= new USERS ({id: users[users.length -1].id + 1, ...data
        });
          await newUser.save();
          console.log('New user has been saved succefully');
          // USERS.insertMany({mongoNewUser});
        } catch (error){
          console.log(`error saving new user`, error);
          return res.status(500).send({error:'error saving new user'});
        }
        // await users.push(newUser);
        // return res.status(201).send(newUser) 
        
      };
      await saveNewUser ();
      users.push(newUser);
      return res.status(201).send(newUser)
     
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
      .get(resolveIndexByUserID, (req,res) => {
        res.json(req.findUser);
      })
      .patch(resolveIndexByUserID,(req,res) =>{
      const { body, findUserIndex } = req;
      users[findUserIndex] = {...users[findUserIndex], ...body};
      return res.sendStatus(204)
    })
    .delete( resolveIndexByUserID, async (req,res,next)=>{
      // const { body,findUserIndex,findByIdAndDelete } = req;
      // users[findUserIndex] = {...users[findUserIndex], ...body};
      // users.splice(findUserIndex, 1)
      try {
        if (!req.findUser) {
          return res.status(404).send({ error: 'User not found' });
      }
        await req.findUser.deleteOne({_id: req.findUser._id});
        res.sendStatus(200);
      } catch (err) {
        console.error(`error deleting user:`, err)
        res.status(500).send({ error: 'Error deleting user' });
      }
    })
export {router}