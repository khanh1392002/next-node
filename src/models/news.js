import mongoose, { Schema }  from "mongoose";

const NewsShecam = new Schema({
    title:{
        type: String,
        required: true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
 
}, {timestamps:true})

export default mongoose.model("News", NewsShecam)