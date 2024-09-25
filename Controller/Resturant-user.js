const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.Restaurantuser = (req, res) => {
    prisma.Resturantuser.findUnique({
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

            prisma.Resturantuser.create({
                data: {
                    email:  req.body.email,
                    password:  req.body.password,
                    name:  req.body.password,
                    resturantId:  req.body.resturantID,
                    phone: req.body.phone,
                    location: req.body.location,
                    roleId:req.body.roleId,
                    restaurant: {
                        connect: { id: req.body.resturantId }
                      }
                    
                   

                    
                  
                },
              }).then((data)=>{
                if(data) {
              
                   res.status(200).json({
                message:'user  registerd sucessfully',data})

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