import express from "express";
const app = express();
const port = 3001;

app.get("/",(req,res)=>{
    res.json({message:"hello testing done" });
});

app.listen(3001,()=>{
    console.log(`server running on port ${port}`);
})