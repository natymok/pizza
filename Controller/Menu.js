const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.Menu = (req, res) => {
           console.log(req)
       
   
            prisma.menu.create({
                data: {
                    resturantId: parseInt(req.body.resturantId),
                    price:  parseFloat(req.body.price),
                    name:  req.body.name,
                    toping: (req.body.toping).split(','),
                    photo: req.file.path,
                  
                },
              })
              .then((data,err)=>{
                if(data) {
              
                   res.status(200).json({
                message:'menu sucessfully',data})
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