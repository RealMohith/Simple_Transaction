require('dotenv').config()
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

const authorizejwt = (req, res, next) => {
    console.log("token below")
    console.log(req.headers['authorization']);
    console.log("########")
    const authHeader = req.headers['authorization'];
    var token = authHeader && authHeader.split(' ')[1]; // Get token from 'Bearer <token>' format
    
    if (!token) return res.sendStatus(401); // If no token, respond with 'Unauthorized'

    // Verify the token
    jwt.verify(token,JWT_SECRET, (err,user) => {
        if (err) {
            console.log(err)
            return res.sendStatus(403)}; // If token is invalid or expired, respond with 'Forbidden'
        req.user = user // Store the user info in the request object
        next(); // Proceed to the next middleware or route handler
    });
};



module.exports = {authorizejwt};