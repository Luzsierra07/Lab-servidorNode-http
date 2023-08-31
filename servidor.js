const http = require ("http");


const port = 8000;
const host = "localhost";

const server = http.createServer((req,res) =>{
    res.setHeader("Contebt-Type", "application/json");
    res.statusCode = 200;

    const response = {
        name: "Luz Sierra",
        message: "Hola desde mi servidor"
    };

    res.end(JSON.stringify(response));
});

const chalk = require("chalk");

server.listen(port, host, () =>{
    const serverInfo = chalk.green("Servidor escuchando en http://${host}:${port}");
    console.log(serverInfo);;
})