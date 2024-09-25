const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.Order = (req, res) => {
  
   
            prisma.order.create({
                data: {
                    userID:  req.body.userID,
                    resturantId:  req.body.resturantId,
                    name:  req.body.name,
                    toping: req.body.toping,
                    quantity: req.body.quantity,
                    photo: req.body.photo,
                  
                },
              })
              .then((data,err)=>{
                if(data) {
              
                   res.status(200).json({
                message:'order accepted',data})
                // prisma.$disconnect();

                   }
                   if(err){
                    res.status(400).json({
                        error:"something wrong"
                      })
                   }
                   else{
                    res.status(400).json({
                      error:"something wrong"
                    })
                   }
              });
              
         
    

  
    
  };