import mongoose from "mongoose";
import express from "express";
import cors from 'cors'

const Products = require("./router/products")
const Category = require("./router/categories")
const User = require('./router/user')
const News = require('./router/news')
// import { json } from "express/lib/response";

const app = express()

mongoose.connect("mongodb://localhost:27017/asm-nextjs")

app.use(express.json())
app.use(cors())
app.use("/api", Products )
app.use('/api',Category)
app.use("/api",User)
app.use("/api",News)


const PORT = 3001
app.listen(PORT, ()=>{
    console.log('Thanh cong')
})