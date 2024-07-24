//module class
//1.import mongoose
const mongoose= require('mongoose');
//2.define schema

const AccountSchema = new mongoose.Schema({
    opendate : {type :Date , default : Date.now},
    amount: {type : Number,default: 0,required : true},
    accountNum: {type : number, required : true}
});


const UserSchema = new mongoose.Schema({   
    name: {type : String , required : true},
    password: {type : String , required : true},
    username: {type : String , required : true},
    accounts: [AccountSchema] 
});
//3.export schema
module.exports = mongoose.model('User', UserSchema);