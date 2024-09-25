const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.addRole = (req, res) => {
            console.log(req.body.permissions,req.body.name)
            prisma.role.create({
                data: {
                    name:req.body.name
                  
                },
              })
              .then((role)=>{
                if(role) {
                    
                   prisma.permission.create({
                    data: {
                        roleId: role.id,
                        action: req.body.action,
                        resource:req.body.resource

                        
                      
                    },

                   }) 
                   .then((data)=>{
                    if(data){
                        res.status(200).json({
                            message:"role created",data
                        })
                    }
                   })

                   }
                 
                   else{
                    res.status(400).json({
                      error:"something wrong"
                    })
                   }
              })
              .catch((err)=>{
                res.status(400).json({
                    error:err
                  }) 
              })
              
         
    
  };