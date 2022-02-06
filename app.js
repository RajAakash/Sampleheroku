const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello World</h1>')
})

server.listen(port, () => {
  console.log(`Server running at port ` + port)
})

//github ma halne steps
//1.create new github reposirory
//2,git init
//3.git add .
//4.git commit -m “first commit”
//5.git remote add origin git remote add origin https://github.com/rramname/MyCoolNodeApp.git
//6.git push — set-upstream origin master
//error
//mkdir repo && cd repo
//git remote add origin /path/to/origin.git
//git add .

//feri github ma upload gareko file ho yo
