const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.Restaurant = (req, res) => {
    prisma.restaurant.findUnique({
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

            prisma.restaurant.create({
                data: {
                    email:  req.body.email,
                    password:  req.body.password,
                    admin_name:  req.body.password,
                    resturant_name:  req.body.resturant_name,
                    phone: req.body.phone,
                    logo:  req.file.path,
                    location: req.body.location,
                    role : 'admin'

                    
                  
                },
              }).then((data)=>{
                if(data) {
              
                   res.status(200).json({
                message:'resturant  registerd sucessfully',data})

                // // prisma.$disconnect();
               
               
                    

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