"use strict";


module.exports = {
    checkUser: async (dataParams)  => {
        try{
            const { userName, password , role, unit} = dataParams;
            if(userName === "super-admin" && password === "12345" && role === 2){
                return true;
            }else{
                return false;
            }

        } catch (error) {
            return false;
        } 
    
    },
};
