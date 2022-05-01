const express = require("express")

// import car Router 
const carRouter = require("./cars/cars-router")

// use server 
const server = express()
server.use(express.json());

// Create api for all routes
server.use("/api/cars", carRouter)

//IMPOT SERVER
module.exports = server

