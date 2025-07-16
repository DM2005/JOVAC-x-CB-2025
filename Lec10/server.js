const http=require("http")

const server=http.createServer((req,res)=>{
    if(req.url === "/" && req.method === "GET")
    {
        res.end("home route")
    }
    if(req.url === "/contact")
    {
        res.end("contact")
    }
})

server.listen(4000,()=>{
    console.log("Server is running");
})