const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;
const FILE = path.join(__dirname, "orders.json");

app.use(cors()); // ⭐ THIS IS THE MAGIC FIX
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

if(!fs.existsSync(FILE)){
 fs.writeFileSync(FILE,"[]");
}

app.get("/api/orders",(req,res)=>{
 const data = JSON.parse(fs.readFileSync(FILE));
 res.json(data);
});

app.post("/api/order",(req,res)=>{
 const orders = JSON.parse(fs.readFileSync(FILE));
 orders.push(req.body);
 fs.writeFileSync(FILE, JSON.stringify(orders,null,2));
 res.json({success:true});
});

app.listen(PORT,()=>console.log("SERVER OK → http://localhost:3000"));