const { defineAbility } = require('@casl/ability');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (user) => {
  const role = await prisma.role.findUnique({
    where: { 
      resturantId_name: {  
        resturantId: parseInt(user.id),
        name: user.role,
      },
     },
  });

  const ability = defineAbility((can) => {
    if (role) {
      console.log(role);
      return prisma.permission.findMany({
        where: { roleId: role.id },
      }).then((permissions) => {
        if (permissions) {
          console.log(permissions);
          permissions.forEach((item) => {
            console.log(item.action, item.resource);
            can(item.action, item.resource,{ resturantId: parseInt(user.id )});
          });
        }
      });
    }
  });

  // Wait for permissions to be processed
  await ability;
  return ability;
};