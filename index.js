const express = require("express");
const { defineAbility } = require('@casl/ability');
const {roleability}=require('./Ability/defineRulesFor')
const app = express();
const bodyParser = require("body-parser");
const Route = require("./Routes/route");
const cors = require("cors");
app.use(
    cors({
    origin: "*", 
  
  }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use("/api", Route);
app.listen(process.env.PORT || 3001, () => {
    console.log("server listineang on port",process.env.PORT);
    
  });