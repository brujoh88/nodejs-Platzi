const express = require("express")
const bodyParser = require("body-parser")
const router = express.Router()
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(router)
const port = 3000

router.get("/", (req, res) => {
  res.send("Groso")
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
