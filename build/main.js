var http = require("http");
var fs = require("fs");

const PORT = 8081;


http.createServer((request, response) => {
    if (request.url=="/") {
        response.writeHead(200, {'Content-Type': 'text/html'});

        fs.readFile('./index.html', function(err, content){
            response.write(content);
            response.end(" ");
        });
    }
    else if (request.url=="/ts") {
        response.writeHead(200, {'Content-Type': 'text/html'});
        // Branje HTML zbirk.
        fs.readFile('./pages/ts.html', function(err, content){
            response.write(content);
            response.end(" ");
        });
    } else 
        response.end("404 NOT FOUND");

}).listen(PORT);


// Izpis v konzoli.
console.log('Server running at http://127.0.0.1:8081/');