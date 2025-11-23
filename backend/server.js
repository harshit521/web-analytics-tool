import {app} from "./src/app.js"
import dotenv from "dotenv";
import connectionOfDb from "./src/config/dbconnection.js"

dotenv.config({
    path:'./.env'
})

connectionOfDb()
.then(()=>{
    app.on("error",(error)=>{
        console.error("Error: ",error)
        throw error
    })
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Process is running at port:${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongo DB connection Failed!!",err)
})
