const http = require('http')
const fs = require('fs')



const requestListner = function (req,res) {
if(req.url === '/home') { 
 try 
    {

        const data = fs.readFileSync('/home/sam/projects/basic_views/index.html', 'utf8')
     
    }
    catch(err) 
    {console.error(err)}
}
if(req.url === '/about') { console.log('URL IS HOME');}
}




const server = http.createServer(requestListner)
server.listen(3030)
console.log('SERVER LISTENING ON PORT 3030');
