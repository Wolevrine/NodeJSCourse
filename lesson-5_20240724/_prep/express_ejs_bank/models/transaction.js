//module class
//1.import mongoose
const mongoose= require('mongoose');
//2.define schema
const TransactionSchema = new mongoose.Schema({
    date : {type :Date , default : Date.now},
    amount: {type : Number,default: 0,required : true},
    fromAccount: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User.accounts',
        required : true},
    toAccount: { 
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User.accounts',
        required : true},
    notes: {type : String}
});
//3.export schema
module.exports = mongoose.model('Transaction', TransactionSchema);