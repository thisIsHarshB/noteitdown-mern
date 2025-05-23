import rateLim from "/Users/Harsh/Desktop/todo-project/todo-project/todo-project/backend/src/config/upstash.js";

const rateLimiter = async (req, res,next)=>{
    try {
        const {success} = await rateLim.limit("my-limit-key");
        if(!success){
            return res.status(429).json({message : "too many requests, try again later."});
        }
        next();
    } catch (error) {
        console.log("Rate limit error", error);
        next(error); 
    }
}

export default rateLimiter;