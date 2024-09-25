const { defineAbility } = require('@casl/ability');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
module.exports = (user) => defineAbility((can) => {
  prisma.role.findUnique({
    where:{
      name:user.role

    } 
})
.then(data=>{
  if(data){
    console.log(data)
    prisma.permission.findMany({
      where:{
        roleId:data.id
  
      } 
  })
  .then((permission)=>{
        if(permission)
        {  console.log(permission)
          permission.map((item)=>{
            console.log(item.action,item.resource)
            can(item.action,item.resource);
          })
        }
  })
    // can(data.permissions.action, data.permissions.action);

  }
})







  // if (user.role=='admin') {
  //   can('update', 'orderStatus');
  //   can('read', 'order');
  //   can('read', 'customer');
  //   can('add', 'user');
  //   can('add', 'role');
  // }
});