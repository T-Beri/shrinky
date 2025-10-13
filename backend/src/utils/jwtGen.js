import jwt from "jsonwebtoken"


export const createToken = (id)=>{
    return jwt.sign(
            {id:id},
            process.env.JWT_SECRET,
            {expiresIn:"1d"},
        )
}

export const verifyToken = (token)=>{
    return jwt.verify(token,process.env.JWT_SECRET);
}