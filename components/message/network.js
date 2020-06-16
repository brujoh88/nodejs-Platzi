const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')
router.get('/', (req, res) => {
  res.header({
    'header-server': 'Genial',
  })
  //console.log(req.headers) //para ver el header de la peticion
  response.success(req, res, 'Mensaje personalizado', 200)
})

router.post('/', (req, res) => {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((msg) => {
      response.success(req, res, msg, 201)
    })
    .catch(() => {
      response.error(req, res, 'Ups fallo', 400, 'Peticion incorrecta')
    })
})

module.exports = router
