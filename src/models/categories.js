import mongoose,{Schema} from "mongoose";

const CategorySchema =  new Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },

}, { timestamps: true})
export default mongoose.model("Category", CategorySchema)