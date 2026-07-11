import {nanoid} from "nanoid";
import {Url} from "../models/url.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {ApiError} from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
const shortCodeGenerator = async() => {
    let shortCode;
    let exists = true;
    while(exists){
        shortCode = nanoid(8);
        exists = await Url.exists({shortCode})
    }
    return shortCode;
}
export const createShortUrls = asyncHandler(async(req,res)=>{
const body = req.body;
if(!body.url){
    throw new ApiError(400,"Url is required");
}
const existingUrl = await Url.findOne({'originalUrl':body.url},'originalUrl shortCode visitedHistory');
console.log(existingUrl);
let sCode;
if(!existingUrl){
     sCode = await shortCodeGenerator();
}

// Checkpoint 4: Save to Database
// Create a new document with:
// originalUrl
// shortCode
// Optional: createdAt timestamp
// Save it in your URLs collection/table.
const newUrl = await Url.create({
    originalUrl:body.url,
    shortCode = sCode
})
// Checkpoint 5: Return Response
// Send back a response object with:
// originalUrl
// shortUrl (base URL + short code)
// Handle errors gracefully.

})