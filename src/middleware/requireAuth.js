import jwt from 'jsonwebtoken';

export const requireAuth = (req, res, next) => {
    const token = req.cookies?.jwt;
    console.log("requireAuth - token:", token);
    if (!token) return res.redirect('/admin/login?error=session_expired');
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("requireAuth - decoded:", decoded);
        next();
    } catch(err) {
        console.log("requireAuth - error:", err.message);
        res.redirect('/admin/login?error=session_expired');
    }
};


