const http = require('http');
const fs = require('fs/promises');
const { readFile } = require('fs');

const port = 8000

async function handler(req, res) {
    try {
        if (req.url === '/' || req.url === '/index.html') {
            const data = await fs.readFile('./index.html', 'utf-8')
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        } else if (req.url === '/about' || req.url === './about.html'){
            const data = await fs.readFile('./about.html', 'utf-8')
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        } else if (req.url === '/contact-me' || req.url === './contact-me.html') {
            const data = await fs.readFile('./contact-me.html', 'utf-8')
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        } else {
            const data = await fs.readFile('./404.html', 'utf-8')
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        }
    } catch (err) {
        const data = await fs.readFile('./404.html', 'utf-8')
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        
    }
}

const server = http.createServer(handler)

server.listen(port)
