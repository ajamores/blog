import jwt from 'jsonwebtoken';
import { prisma } from '../config/db.js';
import "dotenv/config";



/**
 * Read token from request and verify jwt
 * @param {*} req 
 * @param {*} res 
 * @param {*} next - IMPORTANT next is something you can also get from request... allows for request to proceeed
 */
export const authMiddleware = async (req, res, next) =>{

    console.log("Auth middleware reached");

    //Read the token from request(the header part of the request)
    //header is responsible for authentication data

    let token; 
    let authHeader = req.headers.authorization ;

    //Find token
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1] //["Bearer", "sadsTOKENfsdfds"]
        //Checkif cookies is null first with ?
    } else if(req.cookies?.jwt){
        token = req.cookies.jwt;
    }

    //If you cant find, be a bodyguard and prevent use of endpoint
    if(!token) {
        return res.status(401).json({
            status: "unsuccesssful",
            error: "Not authorized, need valid credentials."
        })
    }
    
   
    
    try {
        
        //Verify token and extract the user id... this is how extract the data we need to verify and query db
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log(decoded);
        
        const user = await prisma.admin.findUnique({
            where : {
                username: decoded.username,
            },
            select: {
                id: true,
                username: true
            }
        });

        if(!user){
            console.log("Auth middleware: user not found");
            return res.status(401).json({
                error: "User no longer exists"
            })
        }
        
        //ADD user to req object so that the authController can use
        req.user = user;
        console.log("Authorized user, proceeding past auth middleware")
        next()
    } catch (error) {
        console.log("authMiddleware error: " + error)
        return next(error);
    }

}

