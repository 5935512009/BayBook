const express = require(`express`);
const cors = require(`cors`);

const Middleware = (app) =>{
    app.use(express.json()); // Middleware สำหรับแปลง JSON
    app.use(cors());         // Middleware สำหรับ CORS
}
module.exports = Middleware;