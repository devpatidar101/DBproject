import { StatusCodes } from "http-status-codes";
import { adminmodel } from "../model/AdminModel.js";
import 'dotenv/config'
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import { json } from "express";
// const key = 'mainismain'

export async function Savedetails(req, res) {
  try {
    // here we have encrypted our password using bcrypt library

    let password = req.body.password;
    const encrypass = bcrypt.hashSync(password, 10);
    req.body["password"] = encrypass;

    // here we are going to save our data using mongoose.save inbuilt function

    const admin = adminmodel(req.body);
    const s = await admin.save();

    // here we send response
    res.status(StatusCodes.CREATED).json(s);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ massage: "data not saved" });
  }
}

export async function Fetchdetails(req, res) {
  try {
    let x = await adminmodel.find();
    res.status(StatusCodes.OK).json(x);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ massage: "data not saved" });
  }
}


export async function Adminlogin(req,res) 
{
   // let filter = {phone:req.body.phone}

    const admin = await adminmodel.findOne({phone:req.body.phone}) 
     if (admin) 
     {
            let password = req.body.password 

       if(bcrypt.compareSync(password ,admin.password)) 
       {
            const token = jwt.sign({adminId:admin._id},process.env.KEY)
            res.status(StatusCodes.CREATED).json({Token:token})
       }
       else {
        res.status(StatusCodes.BAD_REQUEST).json({massage:"entered password not matched"})

       }

        
     }
     else {
        res.status(StatusCodes.BAD_REQUEST).json({massage:"entered number not matched"})
     }
}
