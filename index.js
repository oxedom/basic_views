const http = require('http')
const fs = require('fs')
const { log } = require('console')

const requestListner = function (req,res) {
if(req.url === '/home') { console.log('URL IS HOME');}
if(req.url === '/about') { console.log('URL IS HOME');}


}


const server = http.createServer(requestListner)
server.listen(3030)
console.log('SERVER LISTENING ON PORT 3030');