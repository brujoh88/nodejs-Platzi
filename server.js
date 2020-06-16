var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors")
var router = express.Router()
var app = express()
// parse application/x-www-form-urlencoded========
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json=====================
app.use(bodyParser.json())

app.use(cors())

app.use(router)
const port = 3000

router.get("/", (req, res) => {
  res.header({
    "header-server": "Genial",
  })
  console.log(req.headers) //para ver el header de la peticion
  res.send("hola")
})

router.post("/", (req, res) => {
  console.log(req.body)
  console.log(req.query)
  res.send("Post")
})
/* 
app.get("/", (req, res) => res.send("Hello World!"))*/
app.listen(port, () =>
  console.log(`Example app listening on port port! http://localhost:${port}`)
)
