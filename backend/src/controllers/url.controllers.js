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
}
export const createShortUrls = asyncHandler(async(req,res)=>{
// Checkpoint 1: Validate Input
// Receive the original URL from the request body.
// Check if it is a valid URL format.
// Return an error if invalid.
const body = req.body;
if(!body.url){
    return new ApiError(400,"Url is required");
}
// Checkpoint 2: Check for Existing URL
// Query the database to see if this URL was already shortened.
// If yes, return the existing short URL to avoid duplicates.
const existingUrl = await Url.findOne({'originalUrl':body.url},'originalUrl shortCode visitedHistory');
console.log(existingUrl);
// Checkpoint 3: Generate Short Code
// Use a library like nanoid to generate a unique short string.
// Ensure that this short code does not already exist in the database.
if(!existingUrl){
    
}
// Checkpoint 4: Save to Database
// Create a new document with:
// originalUrl
// shortCode
// Optional: createdAt timestamp
// Save it in your URLs collection/table.

// Checkpoint 5: Return Response
// Send back a response object with:
// originalUrl
// shortUrl (base URL + short code)
// Handle errors gracefully.

})