//Ligica de almacenamiento

//===========MOOC

const list = []

const addMessage = (msg) => {
  list.push(msg)
}

const getAllMessage = () => {
  return list
}

module.exports = {
  add: addMessage, //la llamo add
  getAllMessage,
}
//==========FIN=MOOC
