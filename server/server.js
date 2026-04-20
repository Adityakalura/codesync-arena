const express=require('express')//Express is a framework
const PORT=3000

const app=express()

app.get('/',(req,res)=>
{
  res.send(`Hello , making first project`)
})

app.get('/status',(req,res)=>
{
  res.json({app:"CodeSync Arena",version:"1.0",online:"true"})
})
app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});

