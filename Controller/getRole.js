const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.getRole= (req, res) => {
    prisma.role.findMany({
       
        include: {
            permissions: true 
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