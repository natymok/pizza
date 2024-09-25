const defineAbilityFor = require('../Ability/defineRulesFor');
module.exports = (action, resource)  => {
  return (req, res, next) => {
        // const userRole = req.user.role; // Assume user role is set in req.user
        const ability = defineAbilityFor(req.user); // Get abilities based on user role
         console.log(req.user,'useeeer')
        if (ability.can(action, resource)) {
          console.log(`User is authorized to ${action} ${resource}`); // Debug log
          return next(); 
        }
    
        console.log(`User is NOT authorized to ${action} ${resource}`); // Debug log
        return res.status(403).json({ message: 'Forbidden' }); // User is not authorized
      };
};
