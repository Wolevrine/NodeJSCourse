const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('index', { user: user });
});

router.get('/transfer', (req, res) => {
    //const transactions = Transaction.find();
    res.render('transfer', { user: user });
});

router.post('/transfer', (req, res) => {
    const fromAccount = user.accounts.find(account => account.number === req.body.fromAccount);
    const toAccount = user.accounts.find(account => account.number === req.body.toAccount);
    const amount = parseFloat(req.body.amount);

    if (fromAccount && toAccount && fromAccount !== toAccount && amount > 0 && fromAccount.balance >= amount) {
        fromAccount.balance -= amount;
        toAccount.balance += amount;

        //new way to push to mongodb
        const transaction = new Transaction({
            amount : amount , 
            fromAccount : fromAccount.number ,
            toAccount : toAccount.number , 
        });
        try{
            console.log('saving transaction');
            transaction.save();
            res.redirect('/');
        }catch(err){
            console.log(`db err : ${err}`);
            res.redirect('/');

        }
        
    }

    res.redirect('/');
});

router.get('/transactions', async (req, res) => {
    const transactions = await Transaction.find();
    res.render('transactions', { transactions: transactions });
});



app.post('/customer', (req, res) => {
    const useraccount = req.body.customerAcc;
    const amount = parseFloat(req.body.customerAmt);
    
});

app.get('/customer', (req, res) => {
    res.render('addcustomer', { user: user });
});



module.exports = router;