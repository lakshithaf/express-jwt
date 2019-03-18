"use strict";

const configData = require ('../config/constants');
const utils = require('../utils/utilityService');

module.exports = {
    checkIsLogged: async (req,res)  => {
      try {
      
       } catch (error) {
        
       }  
      },
      
    signIn: async (req,res)  => {
      try {
        const isValidUser = await utils.checkUser(req.body);
        if(isValidUser){
          res.send({message: "success", body: {}});
        }else{
          res.send({message: "fail", body: {}});
        }
      } catch (error) {
        res.status(400).send({message: "error", body: { "message":  error.message}});
      }
    
      
    },
};
