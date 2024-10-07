const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.getallOrder= (req, res) => {
    prisma.order.findMany({
       where:{
             resturantId:parseInt(req.user.id)
       }
       
      }).then((data)=>{
        if(data)
          { 
             
            res.status(200).json({
              message:data})
          }
        prisma.$disconnect();
      });
  };