const { PrismaClient } = require('@prisma/client');
const { permission } = require('process');
const prisma = new PrismaClient();
exports.Restaurant = (req, res) => {
 
    prisma.restaurant.findUnique({
          where:{
            email:req.body.email

          } 
    })
    .then((data)=>{
        if(data){
            res.status(400).json({
                error:'email already exist'})
        }
        else{

            prisma.restaurant.create({
                data: {
                    email:  req.body.email,
                    password:  req.body.password,
                    admin_name:  req.body.password,
                    resturant_name:  req.body.resturant_name,
                    phone: req.body.phone,
                    logo:  req.file.path,
                    location: req.body.location,
    

                    
                  
                },
              }).then((resturant)=>{
                if(resturant) {
                    console.log(resturant.id,'vvvvvvvvvvvvv')
                     prisma.role.create({
                      data:{
                        name:"admin",
                        resturantId: parseInt(resturant.id)


                      }
                     })
                     .then((role)=>{
                      if(role){
                        console.log(role,'roleeeeeeeeee')
                        prisma.permission.create({
                          data:{
                            action:"manage",
                            resource:"all",
                            roleId:parseInt(role.id)
                          }
                        })
                        .then(permission=>{
                          if(permission){
                            prisma.resturantuser.create({
                              data:{
                                email:resturant.email,
                                password:resturant.password,
                                name:resturant.admin_name,
                                resturantId:resturant.id,
                                phone: resturant.phone,
                                location:resturant.location,
                                role:role.name
                              }
                            })
                            .then(r_user=>{
                              res.status(200).json({
                                message:'user created ',r_user
                              })
                            })
                            .catch(err=>{
                              res.status(400).json({
                                error:err
                              })
                            })   
                            
                          }
                        })
                        .catch(err=>{
                          res.status(400).json({
                            error:err
                          })
                        })   
                        
                      }
                     })

                     .catch(err=>{
                      res.status(400).json({
                        error:err
                      })
                    })   
                    
               
      
                   }
                   else{
                    res.status(400).json({
                      error:"something wrong"
                    })
                   }
              })
              

              .catch(err=>{
                res.status(400).json({
                  error:err
                })
              })   
              
         
        }

        // prisma.$disconnect();
    })
    .catch(err=>{
      res.status(400).json({
        error:err
      })
    })
    
  };