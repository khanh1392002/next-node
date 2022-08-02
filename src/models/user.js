import mongoose, { Schema } from "mongoose";
import {createHmac} from 'crypto';

const UserSchema =  new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required:true,
    },
    password:{
        type: String,
        required: true,
    }
}, {timestamps:true})


// UserSchema.methods={
    
// } 



export default mongoose.model("User", UserSchema)