import express, { Request, Response, NextFunction } from "express";

const app = express();

app.listen("3001", () => {
  console.log(`
    
    #############################################
        🛡️ Server listening on port: 3001 🛡️
    #############################################  
    `);
});
