const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
exports.addRole = (req, res) => {
            
            prisma.role.findUnique({
              where:{
                name:req.body.name
    
              } 
        })
        .then((roles)=>{
          if(roles){
          
            prisma.permission.create({
              data: {
                  roleId: roles.id,
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
             .catch((err)=>{
              res.status(400).json({
                  error:err
                }) 
            })


          }
          else{
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
            

          }
        })


          
         
    
  };