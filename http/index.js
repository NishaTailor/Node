const http = require("http")
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("http server")
    }
    else if (req.url == "/home") {
        res.end("home page")
    }
})

server.listen(8090, () => {
    console.log("started on 8090");
})