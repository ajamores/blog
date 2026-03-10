import express from "express";
import { login, logout } from "../controllers/authcontroller.js";



const router = express.Router();

router.get('/login', (req, res) => {
    res.status(200).json({
        msg: "your mom"
    })
});

router.post('/login', login)

router.post('/logout', logout)

export default router;