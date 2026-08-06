import {nanoid} from "nanoid";
import Url from "../models/url.model.js";
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
export const redirectToOriginalUrl = asyncHandler(async (req, res) => {
  const { shortCode } = req.params;

  const url = await Url.findOne({ shortCode });

  if (!url) {
    throw new ApiError(404, "Short URL not found");
  }

  // Increment visit count (optional)
  url.visitHistory.push({
    timestamp: Date.now(),
  });

    await url.save();
  return res.redirect(url.originalUrl);
});
export const createShortUrls = asyncHandler(
    async(req,res)=>{
    const body = req.body;
    if(!body.url){
        throw new ApiError(400,"Url is required");
    }
    const existingUrl = await Url.findOne({'originalUrl':body.url},'originalUrl shortCode visitedHistory shortendUrl');
    // console.log(existingUrl);
    let sCode;
    if(!existingUrl){
        sCode = await shortCodeGenerator();
        const shortUrl = `${process.env.BASE_URL}/${sCode}`;
        const newUrl = await Url.create({
            originalUrl: body.url,
            shortCode :sCode,
            shortendUrl:shortUrl
        })
        return res.status(201).json(
            new ApiResponse(
                201, 
                {
                    originalUrl:newUrl.originalUrl,
                    shortCode:newUrl.shortCode,
                    shortendUrl:newUrl.shortendUrl
                },
                "Short URL is created successfully."
            )
        )
    }
    if(existingUrl){
    return res.status(200).json(
        new ApiResponse(
            200,
            {
                originalUrl:existingUrl.originalUrl,
                shortCode:existingUrl.shortCode,
                shortendUrl:existingUrl.shortendUrl
            },
            "URL already exist"
        )
    )
    }
}
)