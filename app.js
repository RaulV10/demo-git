const http = require("http");

// Primera Implementacion
function server(request, response) {

  // Cabecera
  response.writeHead(200, {
    "Content-Type" : "text/html"
  });

  // Cuerpo
  response.write("Hola Mundo!! 🤗");

  response.end();
}

http.createServer(server).listen(8080);

// Segunda Implementacion
http.createServer(function(request, response) {

  // Cabecera
  response.writeHead(200, {
    "Content-Type" : "text/html"
  });

  // Cuerpo
  response.write("Hola Mundo!! 🤗");

  response.end();
}).listen(8080);

// Tercera Implementacion
http.createServer((request, response) => {

  // Cabecera
  response.writeHead(200, {
    "Content-Type" : "text/html"
  });

  // Cuerpo
  response.write("Hola Mundo!! 🤗");

  response.end();
}).listen(8080);
