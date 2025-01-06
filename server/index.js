const express = require('express');

require('dotenv').config();
require("./src/db/config");
const server = express();
server.use(express.json());

const allRouters = require('./src/allconnectivityjunction');

//Router link
server.use('/allApi', allRouters)

server.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})