const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    
        res.statusCode = 200;
        res.setHeader('Context-Type', 'text/html');
        
        let url = req.url;

        // if the request's url is 'localhost:8080/about' 
        // then send about html page.
        if(url === '/about') {
            fs.readFile('./pages/about.html', function(err, data) {
                res.write(data);
                res.end();
            });
        }

        // if the request's url is 'localhost:8080/contact-me' 
        // then send contact-me html page.
        if(url === '/contact-me') {
            fs.readFile('./pages/contact-me.html', function(err, data) {
                res.write(data);
                res.end();
            });
        }

        // if the request's url is 'localhost:8080/404' 
        // then send 404 html page.
        if(url === '/404') {
            fs.readFile('./pages/404.html', function(err, data) {
                res.write(data);
                res.end();
            });
        }

        // if the request's url is 'localhost:8080' 
        // then send index html page.
        else {
            fs.readFile('index.html', function(err, data) {
                res.write(data);
                res.end();
            });
        }
    
    
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});