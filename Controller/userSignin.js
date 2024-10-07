const { PrismaClient } = require('@prisma/client');
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();
exports.userSignin = (req, res) => {
    const signtoken = (id) => {
        const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1y" });
        return token;
      };
    prisma.user.findUnique({
        where: {
            email:  req.body.email 
        },
      }).then((data)=>{
        if(data)
             {
                console.log(data)
                if(data.password==req.body.password){
                    const _token = signtoken(data.id);

                    res.cookie("access_token", _token, {
                        httpOnly: true,
                        secure: true, // Use secure cookies in production
                        maxAge: 3600000 // Cookie expiration time (1 hour)
                      });
                res.status(200).json({
                    message: "sucessfully sined",
                  
                  });
                }
                else{
                    res.status(400).json({
                        error:"incorrect password"
                    })
                }
                
             }
             else{
                res.status(400).json({
                    error:"something went wrong"
                })
             }
        prisma.$disconnect();
      });
  };