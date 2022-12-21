import mongoose, { mongo }  from "mongoose";
import 'dotenv/config'

export async function ConfigureDb() 
{
    try {

      await  mongoose.connect(process.env.URL)
        console.log("mongodb is connected");
        
    } catch (error) {
        console.log('not connected to database ');
    }
} 