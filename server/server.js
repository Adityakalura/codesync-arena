const express=require('express')//Express is a framework
const cors=require('cors')
const PORT=3000

const app=express()

app.get('/',(req,res)=>
{
  res.send(`Hello , making first project`)
})

app.get('/status',(req,res)=>
{
  res.json({message:'Hello from codesync'})
})
app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});

