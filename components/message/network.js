const express = require('express')
const router = express.Router()
const response = require('../../network/response')

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
})

module.exports = router
