const mongoose = require("mongoose")

const Schema = mongoose.Schema

const newMessage = new Schema({
  user: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
})

//El model vincula nuestro schema con el model (tipo tabla) en nuestra base de datos

const model = mongoose.model("Message", newMessage)

module.exports = {
  model,
}
