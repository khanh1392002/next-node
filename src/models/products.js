import mongoose, { Schema, ObjectId }  from "mongoose";

const ProductsShecam = new Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type: String,
        required: true
    },
    description:{
        type:String,
    },
    category:{
        type: ObjectId,
        ref:"Category"
    }
}, {timestamps:true})

export default mongoose.model("Products", ProductsShecam)