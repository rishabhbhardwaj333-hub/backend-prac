const express= require('express');
const app= express();


app.use(express.json());

app.post('/createpost', async (req,res)=>{
    console.log(req.body);
})


module.exports= app;