const express = require("express");
const router = express.Router();
// const {roleability}=require('../Ability/defineRulesFor')
const {Signup}=require('../Controller/User')
const {Restaurant}=require('../Controller/Resturant')
const {Order}=require('../Controller/Order')
const {Menu}=require('../Controller/Menu')
const {upload}=require('../Multer/multer')
const {Restaurantuser}=require('../Controller/Resturant-user')
const {getResturant}=require('../Controller/getResturant')
const authorize=require('../Authorize/auth')
const {addRole}=require('../Controller/addRole')
const {getRole}=require('../Controller/getRole')
const mockUser = (req, res, next) => {
    req.user = { id: '1', role: 'admin' }; // Assign mock user
    next();
  };
 
router.use(mockUser); 
router.post("/signup/user",Signup);
router.post("/addrole",addRole);
router.post("/signup/resturant",upload.single("logo"),Restaurant);
router.post("/order",Order);
router.post("/resturant/user/signup",Restaurantuser);
router.post("/add-menu",upload.single("photo"),Menu);
router.get("/resturant",authorize('read','returant'),getResturant);
router.get("/getrole",getRole);


module.exports = router;
