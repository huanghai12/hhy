const http=require("http");
http.createServer((req,res)=>{
  // res.writeHead(200,{
  //   "Access-Control-Allow-Origin":"http://127.0.0.1:5500"
  // })
  res.write("beijing sun 13~26");
  res.end();
}).listen(3000);