const express = require("express");
const cookieParser = require('cookie-parser')
require('dotenv').config();
const app = express();
const bodyParser = require("body-parser");
const Route = require("./Routes/route");
const cors = require("cors");
app.use(cookieParser());
app.use(
    cors({
    origin: "*", 
  
  }));

app.use(bodyParser.json({ limit: "50mb" }));
app.use("/api", Route);
app.listen(process.env.PORT || 3001, () => {
    console.log("server listineang on port",process.env.PORT);
    
  });