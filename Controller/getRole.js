const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.getRole= (req, res) => {
    prisma.order.findMany({
       
       
      }).then((data)=>{
        if(data)
          {  console.log(data)  
            res.status(200).json({
              message:data})
          }
        prisma.$disconnect();
      });
  };