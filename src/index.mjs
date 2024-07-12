import express from 'express';
const app = express();

import {router as userrouter} from './routes/users.mjs'
import {router as instrumentrouter} from './routes/instrument.mjs'
import {router as studioeqrouter} from './routes/studioeq.mjs'
import {error} from './utilties/error.mjs'
import { studioeq } from './data/studioeq.mjs';

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

