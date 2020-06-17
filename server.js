var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

const router = require('./network/routes')

var app = express()
// parse application/x-www-form-urlencoded========
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json=====================
app.use(bodyParser.json())
app.use(cors())
//app.use(router)
app.use('/app', express.static('public'))
const port = 3000

router(app)

app.listen(port, () =>
  console.log(`Esta aplicacion esta escuchando! http://localhost:${port}`)
)
