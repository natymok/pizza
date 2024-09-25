const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.Signup = (req, res) => {
    prisma.user.findUnique({
          where:{
            email:req.body.email

          } 
    })
    .then((data)=>{
        if(data){
            res.status(400).json({
                error:'email already exist'})
        }
        else{

            prisma.user.create({
                data: {
                    email:  req.body.email,
                    password:  req.body.password,
                    location:  req.body.location,
                    phone: req.body.phone,
                  
                },
              }).then((data)=>{
                if(data) {
              
                   res.status(200).json({
                message:'user registerd sucessfully',data})
                // prisma.$disconnect();

                   }
                   else{
                    res.status(400).json({
                      error:"something wrong"
                    })
                   }
              });
              
         
        }

        // prisma.$disconnect();
    })
    .catch(err=>{
      res.status(400).json({
        error:"something wrong"
      })
    })
    
  };