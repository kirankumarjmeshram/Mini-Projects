

const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(
  jsonServer.rewriter({
    '/api/*': '/$1'
  })
)

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

//const PORT = 5000

// const path = require('path');

// const jsonServer = require('json-server');
// const { kill } = require('process');

// const server = jsonServer.create()

// const router = jsonServer.router(path.join(__dirname, 'db.json'))

// const middlewares = jsonServer.defaults()

// server.use(middlewares)
// server.use(jsonServer.bodyParser)
// server.use('/api', router)
// server.listen(PORT, ()=> console.log(`JSON Server is running on port ${PORT}`))

//CRUD operation

//Create - POST
//Read -GET
//Update - PUT
//DELETE - DELETE

//npm i json-server




//CRUD operation

//Create - POST
//Read -GET
//Update - PUT
//DELETE - DELETE

//npm i json-server

