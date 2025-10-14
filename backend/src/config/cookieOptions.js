export const cookieOptions ={
    httpOnly: true, //cookie is inaccessible via js (helps prevent cross site scripting attacks)
    secure: process.env.NODE_ENV === "production", //cookie is only sent over https
    sameSite:"lax", //cookie sent for same site requests and top level GET navigations
    maxAge:1000*60*5
}