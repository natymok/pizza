const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.UpdateStatus = (req, res) => {
    prisma.order.update({
        where: { id: req.params.orderId },
        data:{
            status:req.body.status
        }
      }).then((data)=>{
        if(data)
           res.status(200).json({
        message:data})
        prisma.$disconnect();
      });
  };