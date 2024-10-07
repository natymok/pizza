const jwt = require('jsonwebtoken');
exports.isAuthenticate=(req,res,next)=>{
  const token = req.cookies.access_token

  if (!token) {
    return res.sendStatus(401); // Unauthorized if no token is found
}
jwt.verify(token,process.env.JWT_SECRET, (err, user) => {
    if (err) {
        return res.sendStatus(403); // Forbidden if token is invalid
    }
    console.log(process.env.JWT_SECRET,user)
    req.user = user; // Assign user information to req.user
    next(); // Proceed to the next middleware or route handler
});
};

