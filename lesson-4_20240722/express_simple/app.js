const express = require('express');
const customerRoutes = require('./customerRoutes');
//const apiRoutes = require('./apiRoutes');

const app = express();

const port = 3000;

//pre handlers middlewear
app.use(express.json());


//get request
app.get('/',(req,res) => {
    res.send('server is up and running');
});

app.get('/api/search',(req,res) => {
   const {q}  =req.query;
   res.send('search result');
});

//routine for api/customer
app.use('/api/customers',customerRoutes);

//app.use('/api',apiroutes);


///load server
app.listen(port, ()=> {
    console.log(`Server is running on port http://localhost:${port}`);
});
