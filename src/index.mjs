import express from 'express';
import {query} from "express-validator";
import pug from "pug"
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import {router as userrouter} from './routes/users.mjs'
import {router as instrumentrouter} from './routes/instrument.mjs'
import {router as studioeqrouter} from './routes/studioeq.mjs'
import  {USERS}  from "./models/users.mjs";
import {Instruments } from "./models/instruments.mjs";
import {Studio} from "./models/studioeq.mjs"

// import path from "path"
// import { fileURLToPath } from 'url';



app.use(express.json());

mongoose.connect(process.env.ATLAS_URI);

mongoose.connection.once('open', ()=> {
  console.log('connected to mongo')});

  mongoose.connection.on ('error', (error)=> {
    console.error('connection error:', error)
  });


app.use(express.static("./public"));
console.log('Static files served from:', 'styles');
app.set("views", "./src/views"); 
app.set("view engine", "pug");

app.get('/views',(req,res)=>{
  const options = {
    title: 'Audio Engineer E commerce ',
    content:
      "Welcome to our premier audio engineering e-commerce platform, where cutting-edge technology meets exceptional sound quality. Discover a curated selection of the finest audio equipment, from state-of-the-art studio gear to top-tier instruments, all designed to elevate your sound. Whether you're a seasoned professional or an aspiring artist, our expertly crafted products and unparalleled customer support will help you create the perfect auditory experience <a href `studio.pug`> studio </a>",
      
  };
  res.render("signup",options)
})
app.get('/userhome', (req, res) => {
  res.render('userhome')
 ;
});
app.get('/studio', (req, res) => {
  res.render('studio');
});
app.get("/instruments", (req, res) => {
  res.render("instruments");

});


const logTime = (req,res,next)=>{
  const time = new Date();
    console.log( `-----${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`);
    next();
}

app.use(logTime)

app.get("/", async(req, res) => {
  let userdb = await USERS.find({})
    res.send(userdb);
  });
app.use("/api/users", userrouter);
app.use("/api/instrument", instrumentrouter);
app.use("/api/studio", studioeqrouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`running on porterpotty ${PORT} `)
});