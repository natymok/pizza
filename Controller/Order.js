const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.Order = (req, res) => {
  
   
            prisma.order.create({
                data: {
                    userID:  req.body.id,
                    resturantId:  req.body.resturantId,
                    name:  req.body.name,
                    toping: req.body.toping,
                    quantity: req.body.quantity,
                    photo: req.body.photo,
                  
                },
              })
              .then((data)=>{
                if(data) {
              
                   res.status(200).json({
                message:'order accepted',data})
                // prisma.$disconnect();

                   }
                   else{
                    res.status(400).json({
                        error:"something wrong"
                      })
                   }
                
              })
              .catch((err)=>{
                if(err){
                  
                }
              })
              
         
    

  
    
  };