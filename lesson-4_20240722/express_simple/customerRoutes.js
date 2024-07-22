const express = require('express');
//const {customers} = require('./customerDB');
const router = express.Router();


const customers = [
    { id: 1, name: 'John Doe', address: '123 Main St, Cityville', balance: 1000.00 },
    { id: 2, name: 'Jane Smith', address: '456 Elm St, Townsville', balance: 1500.50 },
    { id: 3, name: 'Michael Johnson', address: '789 Oak St, Villageton', balance: 500.25 },
    { id: 4, name: 'Emily Davis', address: '101 Pine St, Hamletville', balance: 3000.75 },
    { id: 5, name: 'David Brown', address: '222 Maple St, Suburbia', balance: 750.20 },
    { id: 6, name: 'Sarah Wilson', address: '333 Cedar St, Countryside', balance: 1200.00 },
    { id: 7, name: 'Robert Taylor', address: '444 Birch St, Townville', balance: 800.60 },
    { id: 8, name: 'Jennifer Martinez', address: '555 Oak St, Cityville', balance: 2200.30 },
    { id: 9, name: 'William Garcia', address: '666 Pine St, Hamletville', balance: 1750.10 },
    { id: 10, name: 'Mary Hernandez', address: '777 Elm St, Countryside', balance: 900.45 }];



router.get('/',(req,res) => {
   
    res.send({message: 'all customer'});
});



router.get('/:id',(req,res) => {
    const id = req.params.id;
    const trueId = customers.findIndex(c => c.id === parseInt(id));
    if (trueId >= 0) {
       const curCust = customers[trueId];
        res.status(200).json(curCust);
    }
    else
    {
        res.status(400).json('customer not found'); 
    };
 //   res.send({message: id});
});

router.get('/:id/:transaction',(req,res) => {
    const id = req.params.id;
    const transaction =  req.params.transaction;
    res.send({'cusomer id is ' : id , 'transaction is ' : transaction});
});


router.get('/api',(req,res) => {
    res.send({message: 'hello world'});
});

//router.post('/api', (req,res) => {
//    console.log(req.body);
//    console.log(req.body.name);
//    res.status(201).json({message : 'create customer'});
//});


router.post('/api', (req,res) => {
    res.status(201).json({message : 'customer create'});
//    let maxid = '0';
//        customers.forEach( c => {
//            if (c.id > maxid)
//            {
//                maxid = c.id;
//            } 
//       }); 
//        const newcustomer = JSON.parse(req.body);
//        newcustomer.id = maxid+1 ;
//        customers.push(newcustomer);
//        res.status(201).json({message : 'customer create'});
    
});

module.exports = router;