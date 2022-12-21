import { StatusCodes } from "http-status-codes";
import 'dotenv/config';
import jwt from 'jsonwebtoken';
 export function verifyToken (req,res,next) 
 {
  const Authorization= req.get('Authorization')
  if (Authorization) {
    let token=Authorization.split(" ")[1]
    jwt.verify(token,process.env.KEY,(error,payload)=>{
      if(error){
        res.status(StatusCodes.UNAUTHORIZED).json({message:"access denied"})
      }
      else{
        next();
      }
    })
  }
  else {
    res.status(StatusCodes.UNAUTHORIZED).json({massage:'invaled token '})
  }
 } 