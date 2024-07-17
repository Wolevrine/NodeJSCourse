const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

//resource database
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

//const server =http.createServer((request,response) => {
    const handleApiRequest = (request,response) => {
    //API stucture
    //  /api/v1/customers GET
    //  /api/v1/customers/{id} - GET {one}
    //  /api/v1/customers- POST -->{body: {id,name,adress,...} }
    //  /api/v1/customers/{id} - put -->{body: {id,name,adress,...} }
    //  /api/v1/customers/{id} - DELETE 


    // 1.breakdown URL  to components
    const parsedUrl = url.parse(request.url,true);
    const pathname = parsedUrl.pathname;
    const method = request.method;
    
    const idStartPos = pathname.lastIndexOf('/');

    const id = pathname.substring(idStartPos+1,pathname.length);
    




//extract id from standrd API 

    
 

    //2. Handle speciefic URI and METHOD request

    if (method=== 'GET'){
        if (pathname=== '/api/v1/customers') {
            response.writeHead(200,{'Content-Type' : 'application/json'});
            response.end(JSON.stringify(customers));
        } else if (id > 0)
        {
            response.writeHead(200,{'Content-Type' : 'application/json'});
            response.end(JSON.stringify(customers[id-1]));
        } else
        {            
            response.writeHead(404,{'Content-Type' : 'text/plain'});
            response.end('API not found'); 
        }   
    }
    else if (method=== 'POST'){
        let body = '';
        let maxid = '0';
        customers.forEach( c => {
            if (c.id > maxid)
            {
                maxid = c.id;
            } 
        }); 

        request.on('data', chunck => body+=chunck.toString());
        request.on('end', () => {
            const newcustomer = JSON.parse(body);
            newcustomer.id = maxid+1 ;
            customers.push(newcustomer);
            response.writeHead(201,{'Content-Type' : 'application/json'});
            response.end(JSON.stringify(newcustomer));
        });
        
    }else
    {
        response.writeHead(404,{'Content-Type' : 'text/plain'});
        response.end('API not found');
    }

 //   if (pathname=== '/api/v1/customers' && method=== 'GET'){
        
 //   } else if (pathname=== '/api/v1/customers' && method=== 'GET'){
 //       response.writeHead(200,{'Content-Type' : 'application/json'});
 //       response.end(JSON.stringify(customers));
 //   }
 //   else
 //   {
 //       response.writeHead(404,{'Content-Type' : 'text/plain'});
 //       response.end('API not found');
 //   }

};

module.exports = { handleApiRequest };
