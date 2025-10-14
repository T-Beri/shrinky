import jwt from "jsonwebtoken"
import { cookieOptions } from "../config/cookieOptions.js"

export const createToken = (id)=>{
    return jwt.sign(
            {id:id},
            process.env.JWT_SECRET,
            {expiresIn:"1d"},
        ) //the parts: payload , secret key, options (the header and signature are made by the library)
}

export const createRefreshToken = (userId) => {
    return jwt.sign(
        { id: userId }, 
        process.env.REFRESH_SECRET,
        {expiresIn: "7d" }
    );
};


export const verifyToken = (token)=>{
    return jwt.verify(token,process.env.JWT_SECRET);
}
export const verifyRefreshToken = (token)=>{
    return jwt.verify(token,process.env.REFRESH_SECRET);
}

/*
export const refresh = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.status(401).json({ message: "No refresh token" });

        const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
        const accessToken = createToken(decoded.id); 

        res.cookie("accessToken", accessToken, { cookieOptions});
        res.status(200).json({ message: "Access token refreshed" });
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: "Invalid refresh token" });
    }
}
*/