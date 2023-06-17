const express = require('express')
const app = express();
const PORT = 4587
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mirzanamkutty:mirzanameskvm@meskvm.pukcdzo.mongodb.net/")
.then(()=>{console.log("MongoDB connected successfully")})
.catch(()=>{console.log("Error connecting to MongoDB")});


app.get('/',(req,res)=> {
res.send('server is mirzana')
})

app.get('/about',(req,res)=> {
    res.send('open')

})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
});

