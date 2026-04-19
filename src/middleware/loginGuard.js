import jwt from 'jsonwebtoken';
export const loginGuard = (req, res, next) => {
    const token = req.cookies?.jwt;
    if (!token) return next();
    try {
       
        const verify = jwt.verify(token, process.env.JWT_SECRET);
        if(verify){
             console.log("login guard")
            return res.redirect('/admin/dashboard');
        }
    } catch(err) {
        next();
    }
};