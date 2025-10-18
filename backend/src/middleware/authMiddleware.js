import { findUserViaId } from "../daos/userDao.js";
import { verifyToken,verifyRefreshToken } from "../utils/jwtGen.js";
import { createToken } from "../utils/jwtGen.js";
import { cookieOptions } from "../config/cookieOptions.js";

export const authMiddleware = async(req,res,next)=>{
    console.log("hi im in middle");
    console.log("Cookies received:", req.cookies);
    try{
        const { accessToken, refreshToken } = req.cookies;

    
      if (accessToken) {
        try {
          console.log("we got an access");
          const decoded = verifyToken(accessToken);
          const user = await findUserViaId(decoded.id);
          if (!user) return res.status(401).json({ message: "Unauthorized" });
          req.user = user;
          return next();
        } catch (err) {
          console.log("Access token invalid/expired:", err.message);
          // continue to check refresh token
        }
      }

      if (refreshToken) {
        console.log("i have refresh")
        try {
          const decodedRefresh = verifyRefreshToken(refreshToken);
          const user = await findUserViaId(decodedRefresh.id);
          if (!user) return res.status(401).json({ message: "Unauthorized" });

        
          const newAccessToken = createToken(user._id);
          res.cookie("accessToken", newAccessToken, cookieOptions);

          req.user = user;
          console.log("i made new access for u")
          return next();
        } catch (err) {
          console.log("Refresh token invalid/expired:", err.message);
          return res.status(401).json({ message: "Unauthorized" });
        }
      }

      return res.status(401).json({ message: "No cookies" });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server Error" });
    }
  }