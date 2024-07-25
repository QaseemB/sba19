import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { USERS } from "../models/users.mjs";




const users =  async () => {
   try{
    
    const userdb = [

    {
 
      name: "Carey",
      username: "cyare23",
      password: "ellogov",
      email: "cy23@example.com",
    },
    {

      name: "Mikoto",
      username: "MKultra",
      password: "buddawearsgucci",
      email: "mikoto_u@example.com",
    },
    {

      name: "Ronald",
      password: "michealmeyers",
      username: "RonRonRon",
      email: "mronald@example.com",
    },
    {

      name: "lamine",
      password: "sunsetdrive69",
      username: "bestofthebest",
      email: "sweet16@gmail.com"
    },
    {

      name: "messi",
      username: "Goat10",
      password: "c05tompa55w0rd",
      email: "barcalegend@gmail.com"
    },
    {
      name: "ronaldo",
      username: "bestofthebest",
      password: "aspiringsoftwaredev",
      email: "cr7@gmail.com"
    }
  ];
      await USERS.insertMany(userdb);
      console.log('userdb has been saved')
     }catch (error){
    console.error('Error saving users', error)
  }
  };

  await users();


export {users}