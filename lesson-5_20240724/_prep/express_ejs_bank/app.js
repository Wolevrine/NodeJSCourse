// --- imports -----
const express = require('express');
const bodyParser = require('body-parser');
const reslogger = require('./middlewares/response-logger');

//DB  imports
const mongoose = require('mongoose');
const Transaction = require('./models/transaction');
const dotenv = require('dotenv');

const app = express();
const port = 3000;

//use template engine EJS
app.set('view engine', 'ejs');
//define static folder as public for all 
app.use(express.static('public'));
//define parser for HTML form
app.use(bodyParser.urlencoded({ extended: true }));

app.use(reslogger);


dotenv.config();


///controllers
const accountController = require('./controllers/account');
const authController = require('./controllers/auth');

//use MONGO DB
// 1. create connection string
//const connectionString = 'mongodb+srv://goffer21:ktKlKc1QqTuCqMr2@cluster0.ube9xwi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectionString = process.env.MONGODB_URI;

// 2. connect to DB 
mongoose.connect(connectionString, {UseNewUrlParser : true})
    .then(()  => {console.log('connected to DB')})
    .catch(err => {console.log(`Mongo DB Failed to connect: ${err.message}`)});




const user = {
    name: 'John Doe',
    accounts: [
        { number: '12345678', balance: 5000 },
        { number: '87654321', balance: 3000 }
    ]
};

const transactions = [];

//controler

app.use('/accounts',accountController);
app.use('/auth',authController);






app.listen(port, () => {
    console.log(`Banking app listening at http://localhost:${port}`);
});