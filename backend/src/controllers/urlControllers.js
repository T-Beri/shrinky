import shortUrl from "../models/urlShorten.js";
import {nanoid} from "nanoid";

export async function createUrl(req,res){
    try{
        const {url} = req.body; 
        const short = nanoid(7);
        const doc = await shortUrl.create({full_url:url,short_url:short});
        res.status(201).json({message:"Short url created successfully."});
    }catch(error){
        res.status(500).json({message:"There was a problem in creating the shortend url."}); //every request handler must send back a response or the client will hang
    }
}
export async function retrieveUrl(req,res){
    const doc = await shortUrl.findOne({short_url:req.params.shortUrl}); //find returns an array so use findOne
    //mongoose queries return a promise so you await them
    if(doc){
        res.redirect(doc.full_url);
    }else{
        res.status(404).json({message:"The url was not found."});
    }
}

