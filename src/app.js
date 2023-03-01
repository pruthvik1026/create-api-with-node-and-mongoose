const { response } = require("express");
const express = require("express");
require("../src/db/conn.js")

const MensRanking = require("../src/models/mens")

const app = express();
const port = process.env.PORT || 3000;

app.post("/createid", async (req,res) => {
  try{
    const addingMensRecords = new MensRanking({
      "id":5,
      "username":"dalo",
      "firstname":"dalo",
      "lastname":"patel",
      "phonenumber":"7493432223",
      "city":"surat"
    })
    addingMensRecords.save()
    res.send('user create success')
  }catch(e){
    console.log(e)
  }
})

app.get("/getAllEmployee", async (req,res) => {
  console.log("asd");
  try{
    const getMens = await MensRanking.find({});
    res.send(getMens);
  }catch(e){
    console.log(e)
  }
})

app.get("/getEmployeeById/:id", async (req,res) => {
  console.log("asd");
  try{
    const _id = req.params.id;
    const getMens = await MensRanking.findById({_id});
    res.send(getMens);
  }catch(e){
    console.log(e)
  }
})

app.patch("/update/:id", async (req,res) => {
  console.log("asd");
  try{
    const _id = req.params.id;
    const getMens = await MensRanking.findByIdAndUpdate(_id,req.body,{
      new:true
    });
    res.send(getMens);
  }catch(e){
    console.log(e)
  }
})

app.delete("/delete/:id", async (req,res) => {
  console.log("asd");
  try{
    const getMens = await MensRanking.findByIdAndDelete(req.params.id);
    res.send(getMens);
  }catch(e){
    console.log(e)
  }
})

app.listen(port, () => {
  console.log(`connection is live on port ${port}`);
})