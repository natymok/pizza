const { PrismaClient } = require('@prisma/client');
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();
exports.Signin = (req, res) => {
    const signtoken = (id) => {
        const token = jwt.sign({ id }, "the net ninja", { expiresIn: "1y" });
        return token;
      };
    prisma.restaurant.findUnique({
        where: {
            email:  req.body.email 
        },
      }).then((data)=>{
        if(data)
             {
                if(data.password==req.body.password){
                    const _token = signtoken(data.id,data.role);
                res.status(200).json({
                    message: "sucessfully sined",
                    Accesstoken: _token
                  
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