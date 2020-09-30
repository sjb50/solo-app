const fs = require("fs");
const http = require("http");
var mysql = require('mysql');




 const server = http.createServer((req,res)=>{
   res.setHeader('content-type','application/json')
   res.setHeader('mode','no-cors')
   res.setHeader('Access-Control-Allow-Origin','*')
   console.log(req.url)
   var path = req.url;
   if (req.url != "/"){
     fs.readFile('./node-server/images'+ path +".jpg", function (err, content) {
        if (err) {
            res.writeHead(400, {'Content-type':'text/html'})
            console.log(err);
            res.end("No such image");
        } else {
            //specify the content type in the response will be an image
            res.writeHead(200,{'Content-type':'image/jpg'});
            res.end(content);
        }
      });
   }else{

     var con = mysql.createConnection({
       host: "localhost",
       user: "root",
       password: "",
       database: "store"
     });

     con.connect(function(err) {
       if (err) throw err;
         console.log("Connected!");
         var sql = "SELECT * FROM products";
         con.query(sql, function (err, result, fields) {
           if (err) throw err;
           res.write(JSON.stringify(result));
           res.end();
         });
       });
 }
 })

 server.listen(2000,'localhost',()=>{
   console.log("listening on port 2000")
 })
