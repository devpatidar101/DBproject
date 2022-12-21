import express from 'express';
import { Adminlogin, Fetchdetails, Savedetails } from '../controller/admincontroll.js';
import { verifyToken } from '../middleware/middleware.js';
const adminRouter=express.Router();
adminRouter.post('/admin',Savedetails);
adminRouter.get('/admin',verifyToken,Fetchdetails);
adminRouter.post('/admin/login',Adminlogin)


export default adminRouter;