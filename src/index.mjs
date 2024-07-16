import express from 'express';
import {query } from "express-validator";
import pug from "pug"
const app = express();
import {router as userrouter} from './routes/users.mjs'
import {router as instrumentrouter} from './routes/instrument.mjs'
import {router as studioeqrouter} from './routes/studioeq.mjs'
import {error} from './utilties/error.mjs'
import { studioeq } from './data/studioeq.mjs';
import path from "path"
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.set("views", "./src/views"); 
app.set("view engine", "pug")

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
  res.render('studio', { title: 'Other Page', content: 'This is the other page.' });
});
app.get('/instruments', (req, res) => {
  res.send('Product 2 Page');

});

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