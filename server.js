const http = require('http')

const todos = [
  { id: 1, title: 'Learn Node.js', completed: false },
  { id: 2, title: 'Learn React', completed: false },
  { id: 3, title: 'Learn Angular', completed: false }
]
//404 staus code get request
// const server = http.createServer((req, res) => {
//   res.statusCode = 404
//   res.setHeader('content-type', 'application/json')
//   res.setHeader('X-Powered-By', 'Node.js')
//   res.end(
//     JSON.stringify({
//       success: false,
//       data: {}
//     })
//   )
// })

//200 status code GET request
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('X-Powered-By', 'Node.js')
  //res.writeHead(404,{
  // 'Content-Type': 'application/json',
  // 'X-Powered-By': 'Node.js'
  //   })
  res.end(
    JSON.stringify({
      success: true,
      data: todos
    })
  )
})

const PORT = 3000

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
