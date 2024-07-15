import express from 'express';
import {query } from "express-validator";
import pug from "pug"
import fs from "fs"
const app = express();
import {router as userrouter} from './routes/users.mjs'
import {router as instrumentrouter} from './routes/instrument.mjs'
import {router as studioeqrouter} from './routes/studioeq.mjs'
import {error} from './utilties/error.mjs'
import { studioeq } from './data/studioeq.mjs';


app.set("views", "./src/views"); 
app.set("view engine", "pug")

app.get('/views',(req,res)=>{
  const options = {
    title: 'Rendering Views with Express',
    content:
      "Here, we've created a basic template engine using <code>app.engine()</code> \
      and the <code>fs</code> module, then used <code>res.render</code> to \
      render this page using custom content within the template.<br><br> \
      Generally, you won't want to create your own view engines, \
      but it important to understand how they work behind the scenes. \
      For a look at some popular view engines, check out the documentation for \
      <a href='https://pugjs.org/api/getting-started.html'>Pug</a>, \
      <a href='https://www.npmjs.com/package/mustache'>Mustache</a>, or \
      <a href='https://www.npmjs.com/package/ejs'>EJS</a>. \
      More complete front-end libraries like React, Angular, and Vue \
      also have Express integrations.",
  };
  res.render("test",options)
})

app.use(express.json())
const PORT = process.env.PORT || 3000;
const logTime = (req,res,next)=>{
  const time = new Date();
    console.log( `-----${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`);
    next();
}

app.use(logTime)

app.use("/api/users", userrouter)
app.use("/api/instrument", instrumentrouter)
app.use("/api/studio", studioeqrouter)

app.get("/", (req, res) => {
    res.send("Work in progress!");
  });

app.listen(PORT, () => {
    console.log(`running on porterpotty ${PORT} `)
});

