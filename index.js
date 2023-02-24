
const express=require("express")
const { connection } = require("mongoose")
const db=require("./db")
const app=express()

const{productRouter}=require("./route/ProductRoute")
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home page")
})

app.use("/product",productRouter)
app.listen(1727,async()=>{
    try {
        await connection
        console.log("connected to db")

    } catch (err) {
        console.log("not connected")
    }
    console.log("server on 1727")
})