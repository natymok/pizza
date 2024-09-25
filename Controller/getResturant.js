const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.getResturant= (req, res) => {
    prisma.restaurant.findMany({
       
        include: {
            resturantusers: true // Assuming you want to include programs related to this channel
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