const express = require("express");
const router = express.Router();
// const {roleability}=require('../Ability/defineRulesFor')
const {Signup}=require('../Controller/User')
const {ResturantSignin}=require('../Controller/Resturant-signin')
const {userSignin}=require('../Controller/userSignin')
const {Restaurant}=require('../Controller/Resturant')
const {Order}=require('../Controller/Order')
const {Menu}=require('../Controller/Menu')
const {upload}=require('../Multer/multer')
const {Restaurantuser}=require('../Controller/Resturant-user')
const {getResturant}=require('../Controller/getResturant')
const authorize=require('../Authorize/auth')
const {isAuthenticate}=require('../Authorize/isAuthenticate')
const {addRole}=require('../Controller/addRole')
const {getRole}=require('../Controller/getRole')
const {getOrder}=require('../Controller/getOrder')
const {getallOrder}=require('../Controller/getallOrder')
router.post("/signup/user",Signup);
router.post("/user/signin",userSignin);
router.post("/addrole",authorize('create',''),addRole);
router.post("/signup/resturant",upload.single("logo"),Restaurant);
router.post("/order",Order);
router.post("/resturant/signin",ResturantSignin);
router.post("/resturant/user/signup",Restaurantuser);
router.post("/add-menu",isAuthenticate,upload.single("photo"),Menu);
router.get("/resturant",isAuthenticate,authorize('read','user'),getResturant);
router.get("/getrole",isAuthenticate,getRole);
router.get("/order",isAuthenticate,getOrder);
router.get("/all/order",isAuthenticate,authorize('read','order'),getallOrder);
module.exports = router;
