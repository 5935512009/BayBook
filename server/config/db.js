const  mongoose = require('mongoose');

module.exports = () =>{
    try{
        mongoose.connect(process.env.DB);
        console.log(`connected database successful`);
    }catch(err){
        console.log(`error in db file` + err);
        console.log(`could not connect to database!`);
        
    }
}