import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { USERS } from "../models/users.mjs";




const users =  
    [

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
      username: "bestofthebest359",
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

  // const saveTestUser = async () => {
  //   try {
  //     const testUser = new USERS({
  //       name: "mike",
  //       username: "mjthegoat",
  //       password: "hellogovenor",
  //       email: "mjisthegoat@gmail.com"
  //     });
  //     await testUser.save();
  //     console.log('Test user saved successfully');
  //     // USERS.insert({testUser})
  //   } catch (error) {
  //     console.error('Error saving test user:', error);
  //   }
  // };
  
  // await saveTestUser();  

//   const storingUsers = async () =>{
//    await USERS.deleteMany({})
//     .then(()=>{
//       console.log("users has been cleared")
//     })
//     .catch((error)=>{
//       console.log('error deleting the users')
//     })
//   await USERS.insertMany(users)
//     .then(()=> {
//      console.log('userdb has been saved')
//       })
//     .catch ((error)=>{
//     console.error('Error saving users', error)
//   });
//   }
  
// storingUsers();

export {users}