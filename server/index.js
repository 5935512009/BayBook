const express = require("express");
const app = express();
require("dotenv").config();
const connectionDB = require(`./config/db`);
const middleware = require(`./middleware/index`);
const routesBook = require('./routes/bookRoutes');
const routesUser = require('./routes/userRoutes');
//Database
connectionDB();

//Middlewares
middleware(app);

//Routes
app.get('/test', async(req,res)=>{
    res.json("test hello world");
});

//Routes RestAPI
app.use('/api/books',routesBook);
app.use('/api/users',routesUser);

const PORT = process.env.PORT || 4001;
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});