const express = require("express");
const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const menSchema = new mongoose.Schema({
  id:{
    type:Number,
    required:true,
    unique:true
  },
  username:{
    type:String,
    required:true,
    trim:true
  },
  firstname:{
    type:String,
    required:true,
    trim:true
  },
  lastname:{
    type:String,
    required:true,
    trim:true
  },
  phonenumber:{
    type:Number,
    required:true,
    trim:true
  },
  city:{
    type:String,
    required:true,
    trim:true
  },
})

const MensRanking = new mongoose.model("MensRanking",menSchema)
module.exports = MensRanking;