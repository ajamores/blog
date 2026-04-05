import jwt from "jsonwebtoken";


// Generate a JWT that stores the user's ID in its payload.
// The token is signed with the server's secret key to prevent forgery.
// The client will send this token with each request so the server
// can verify that the request is coming from an authenticated user.

// A JWT consists of three parts:
// 1. Header    -> Contains metadata about the token (ex: signing algorithm used).
// 2. Payload   -> Contains the data stored in the token (ex: { id: userId } used to identify the user).
// 3. Signature -> Created using the server's secret key to verify the token has not been altered.

//Your going to need a JWT_SECRET env variable. Run openssl rand -base64 32 in terminal or wsl to obtain secret.
//Also determine how long your user is signed in for using JWT_EXPIRES_IN in the env

//This is how you protect your API endpoints 


const EXPIRES_IN_DAYS = parseInt(process.env.JWT_EXPIRES_IN) || 7;
const COOKIE_MAX_AGE = EXPIRES_IN_DAYS * 24 * 60 * 60 * 1000;    

export const generateToken = (username, res) =>{

    const payload = {username: username};

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: `${EXPIRES_IN_DAYS}d`
    });


    res.cookie("jwt", token, {
        httpOnly: true, // make so js cant be run to mess website aka prvent client side script
        secure: process.env.NODE_ENV === "production", //secure only if in prod 
        sameSite: "Strict", //stops CRSF atacks 
        maxAge: COOKIE_MAX_AGE //(1000 miliseconds, 60 sec in a min, 60 min an hour, 24 hours in one day ) * your specifed days = 7
    })

    return token;
}