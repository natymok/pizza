const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.getOrder= (req, res) => {
    prisma.order.findMany({
       where:{
        userID:parseInt(req.user.id)
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