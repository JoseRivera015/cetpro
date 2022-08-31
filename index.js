const http = require('http')
const fs = require('fs')
const port = 5000
const server = http.createServer((req, res) => {
	console.log(req.url)
	res.writeHead(200, {'Content-Type': 'text/html'})
	fs.readFile('index.html', (error, data) => {
		res.write(data)
		res.end()
	})
})
server.listen(port, () => console.log('Funcionando'))
