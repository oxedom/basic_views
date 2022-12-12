const http = require('http')
const fs = require('fs')



const requestListner = function (req,res) {


if(req.url === '/') { 

 try 
    {
        res.statusCode = 200
        const data = fs.readFileSync('/home/sam/projects/basic_views/index.html', 'utf8')
        res.end(data)
    }
    catch(err) 
    {console.error(err)}
}

else if(req.url === '/about') { 
    try 
    {
        res.statusCode = 200
         const data = fs.readFileSync('/home/sam/projects/basic_views/about.html', 'utf8')
        res.end(data)
    }
    catch(err) 
    {console.error(err)}
    

}
else if(req.url === '/contact') { 
    try 
    {
        res.statusCode = 200
 const data = fs.readFileSync('/home/sam/projects/basic_views/contact.html', 'utf8')
        res.end(data)
    }
    catch(err) 
    {console.error(err)}
    

}

else { 
 
    try 
    {
        // res.statusCode = 404
 const data = fs.readFileSync('/home/sam/projects/basic_views/404.html', 'utf8')
        res.end(data)
    }
    catch(err) 
    {console.error(err)}
    
    
}




}




const server = http.createServer(requestListner)
server.listen(3030)
console.log('SERVER LISTENING ON PORT 3030');
