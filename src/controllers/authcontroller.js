import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";




export const login = async (req, res) => {

    try {
        
        //decontruct what you need from the req
        const { username, password } = req.body;


        //Search db for username 
        const user = await prisma.admin.findUnique({
            where: {username: username}, 
        })

        if(!user){
            const error = "Login Controller: User not found";
            console.log(error);
            return res.status(401).json({
                status: "unsuccessful",
                error: "Invalid username or password"
            })
        }


        //If all good compare password
        const validPassword = await bcrypt.compare(password, user.password);

        if(!validPassword) return res.status(401).json({ 
            error: "Invalid username or password" 
        })

        //create token if password good
        const jwt = generateToken(user.username, res);

        res.status(201).json({
            status: "successful",
            data: {
                user: user.username
            },
            token: jwt
        });

    } catch (error) {
        console.log(error);
        return res
            .status(404)
            .json({
                status: "unsuccessful",
                error: error
            })
    }
}


export const logout = (req, res) => {

}