var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var router = express.Router()
const response = require('./network/response')
var app = express()
// parse application/x-www-form-urlencoded========
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json=====================
app.use(bodyParser.json())
app.use(cors())
app.use(router)
app.use('/app', express.static('public'))
const port = 3000

router.get('/', (req, res) => {
  res.header({
    'header-server': 'Genial',
  })
  //console.log(req.headers) //para ver el header de la peticion
  response.success(req, res, 'Mensaje personalizado', 200)
})

router.post('/', (req, res) => {
  if (req.query.error == 'ok') {
    response.error(req, res, 'Ups fallo', 400, 'Peticion incorrecta')
  } else {
    response.success(req, res, 'Mensaje Creado', 201)
  }
  /*console.log(req.body)
  console.log(req.query)
  res.status(201).send('Elemento creado!')
   res.status(201).send([
    {
      id: 1,
      name: 'Gustavo',
    },
    {
      job: true,
      wife: true,
    },
  ]) */
})
/* 
app.get("/", (req, res) => res.send("Hello World!"))*/
app.listen(port, () =>
  console.log(`Esta aplicacion esta escuchando! http://localhost:${port}`)
)
