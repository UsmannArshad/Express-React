const Express=require('express')
const App=Express()
App.get("/",(req,res)=>{res.end("Home")})
App.get("/api/users",(req,res)=>{
    res.json([{id:1,name:'usman'},{id:2,name:'Ali'}])
})
App.listen(3001)