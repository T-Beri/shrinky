import { findUserViaId } from "../daos/userDao.js";
import { verifyToken,verifyRefreshToken } from "../utils/jwtGen.js";

export const authMiddleware = async(req,res,next)=>{
    try{
        const accessToken = req.cookies.accessToken;
        const refreshToken = req.cookies.refreshToken;

        if (accessToken) {
            try {
                const decoded = verifyToken(accessToken);
                const user = await findUserViaId(decoded.id);
                if (user) req.user = user;
                return next();
            } catch (err) {
                // access token invalid or expired → fallback to refresh token
            }
        }

        if (refreshToken) {
            try {
                const decodedRefresh = verifyRefreshToken(refreshToken);
                const user = await findUserViaId(decodedRefresh.id);
                if (user) {
                    req.user = user;
                    // issue new access token
                    const newAccessToken = createToken(user._id);
                    res.cookie("accessToken", newAccessToken, cookieOptions);
                }
            } catch (err) {
                // invalid refresh token → just continue as guest
            }
        }

        next(); 
    } catch (error) {
        console.error(error);
        next();
    }
}