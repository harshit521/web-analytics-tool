import {Url} from "../models/url.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {ApiError} from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createShortUrls = asyncHandler(async(req,res)=>{
// Checkpoint 1: Validate Input
// Receive the original URL from the request body.
// Check if it is a valid URL format.
// Return an error if invalid.

// Checkpoint 2: Check for Existing URL
// Query the database to see if this URL was already shortened.
// If yes, return the existing short URL to avoid duplicates.

// Checkpoint 3: Generate Short Code
// Use a library like nanoid to generate a unique short string.
// Ensure that this short code does not already exist in the database.

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

    const {originalCode} = req.body
    if(!originalCode){
        throw new ApiError(400,"No url provided");
    }
    const existingUrl = await Url.findOne({
        
    })
})
