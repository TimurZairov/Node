const http = require('http')

const server = http.createServer((req, res) => {
 console.log(req.url)


 res.write('<h1>Hello</h1>')
 res.write('<h2>Hello</h2>')
 res.write('<h>Hello!!!!</h3>')
 res.end(`
  <div style="background: aquamarine; width: 200px; height: 200px"><h1>TEst</h1></div>
 `)
})

server.listen(3000, () => {
 console.log('Server is started')
})
