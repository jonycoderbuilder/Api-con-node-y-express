
const http = require('http')


const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json'})
    response.end(JSON.stringify())
})

const PORT = 3001 
app.listen(PORT)
console.log( `Server running on port ${PORT}`)