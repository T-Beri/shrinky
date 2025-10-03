export const ErrorHandler=(err,req,res,next)=>{
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            success:false,
            message:err.message
        })
    }

    console.log(err);
    res.status(500).json({
        success:false,
        message:err.message || "Internal Server Error"
    })
};

export class AppError extends Error{
    statusCode;
    isOperational;
    
    constructor(message,statusCode=500,isOperational=true){
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this,this.constructor);//Take a snapshot of the stack right now, assign it to this error object, and don’t include the constructor itself in the trace
    }
}

export class NotFoundError extends AppError{
    constructor(message = "Resource not found"){
        super(message,404);
    }

}


export class UnauthorizedError extends AppError{
    constructor(message = "Unauthorized"){
        super(message,401);
    }

}
export class BadRequestError extends AppError{
    constructor(message = "Bad request"){
        super(message,400);
    }

}

export class ConflictError extends AppError{
    constructor(message = "Conflict occurred"){
        super(message,409);
    }

}

