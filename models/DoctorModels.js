const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    userId:{
        type:String,
    },
    firstName:{
        type:String,
        required:[true,'First Name is Required']
    },
    lastname:{
        type:String,
        required:[true,'Last Name is Required']
    },
    phone:{
        type:String,
        required:[true,'Phone No is Required']
    },
    email:{
        type:String,
        required:[true,'Email is Required']
    },
    website:{
        type:String,
    },
    address:{
        type:String,
        required:[true,'Address is Required']
    },
    specialization:{
        type:String,
        required:[true,'Specialization is Required']
    },
    experience:{
        type:String,
        required:[true,'Experience is Required']
    },
    feesPerCunsaltation:{
        type:Number,
        required:[true,'fee is required']
    },
    status:{
        type:String,
        default:'pending'
    },
    timings:{
        type:Object,
        required:[true,'Work timing is required']
    } 
},{timestamps:true})

const doctorModel = new mongoose.model('doctors',doctorSchema)

module.exports = doctorModel