const jwt = require('jsonwebtoken');
const User = require('../models/user')

// JWT authentication middleware
const authenticateJWT = async (req, res, next) => {
    console.log('Authenticating');
    //verfiy that the JWTTOKEN  EXIST
    const token = req.signedCookies.token;
    if (!token) {
        console.log('token not valid');
        return res.redirect('../auth/login')
    }
    //get the user and populate to locals.user
    try {
    const parsedToken = jwt.verify(token,process.env.JWT_SECRET);
    
    const user = await User.findbyId(parsedToken);
    delete user.password;
    res.locals.user  = user;
    
    }catch(error){
        res.redirect('../auth/login', {err: err.message});
    } finally{
        next();
    }
};

module.exports = authenticateJWT;