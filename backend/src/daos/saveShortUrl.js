import shortUrl from "../models/urlShorten.js";

export async function saveShortUrl(url,short,userId) {
    const doc = new shortUrl({
            full_url:url,
            short_url:short});
    if(userId){
        doc.user = userId;
    }
    doc.save();

}