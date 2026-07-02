import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
        shortCode:{
            type:String,
            required : true,
            unique: true
        },
        originalUrl:{
            type:String,
            required:true,
            unique:true
        },
        visitHistory: [{
            timestamp:{
                type :Number
            }
        }]
    },
    {
        timestamps:true
    }
)

const Url = mongoose.model("Url",urlSchema)

export default Url

