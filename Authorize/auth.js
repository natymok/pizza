// const defineAbilityFor = require('../Ability/defineRulesFor');
// module.exports = (action, resource)  => {
//   return (req, res, next) => {
//         // const userRole = req.user.role; // Assume user role is set in req.user
//         const ability =  defineAbilityFor(req.user); // Get abilities based on user role
//          console.log(req.user,'useeeer')
//          console.log(action,resource,'kkkkkkk')
//          console.log(ability.can(action, resource))
//         if (ability.can(action, resource)) {
//           console.log(`User is authorized to ${action} ${resource}`); // Debug log
//           return next(); 
//         }
    
//         console.log(`User is NOT authorized to ${action} ${resource}`); // Debug log
//         return res.status(403).json({ message: 'Forbidden' }); // User is not authorized
//       };
// };
// const user = { role: 'admin' }; // Replace with actual user data
// const ability = await defineAbilityFor(user);

// if (ability.can('read', 'post')) {
//   console.log('User has permission to read posts');
// } else {
//   console.log('User does not have permission to read posts');
// }




const defineAbilityFor = require('../Ability/defineRulesFor');

module.exports = (action, resource) => {
  return async (req, res, next) => {
      console.log(req.user,'reqqqqqqqqqqqqqqqqq')
    try {
      const ability = await defineAbilityFor(req.user); // Await the ability definition
      console.log(req.user, 'user');
      console.log(action, resource, 'action and resource');
      console.log(ability.can(action, resource));

      if (ability.can(action, resource)) {
        console.log(`User is authorized to ${action} ${resource}`); // Debug log
        return next();
      }

      console.log(`User is NOT authorized to ${action} ${resource}`); // Debug log
      return res.status(403).json({ message: 'Forbidden' }); // User is not authorized
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };
};