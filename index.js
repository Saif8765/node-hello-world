// Import the HTTP module
const http = require('http')

// Define the port number
const port = 3000

// Create an HTTP server
const server = http.createServer((req, res) => {
	// Set the response header with a status code of 200 (OK) and content type of plain text
	res.writeHead(200, { 'Content-Type': 'text/plain' })

	// Write a response to the client
	res.end('Hello,Saif Ali Khaan - how are you - Im fine - and Shine  \n')
})

// Start listening on the specified port
server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`)
})
