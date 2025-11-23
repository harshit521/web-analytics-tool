import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
        shortCode:{
            type:String,
            required : true,
            unique: true
        },
        originalCode:{
            type:String,
            required:true,
            unique:true
        },
        clicks:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true
    }
)

const Url = mongoose.model("Url",urlSchema)

export default Url

