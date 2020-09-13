const http = require("http");


http.createServer((request, response) => {

        response.write("webserver");
        response.end();
    })
    .listen(8080);

console.log("estoy en puerto 8080");