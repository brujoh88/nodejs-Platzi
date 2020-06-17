const store = require('./store')
const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[MSG CONTROLLER USUER o MSG]')
      return reject('Falta un dato')
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    }
    store.add(fullMessage)
    resolve(fullMessage)
  })
}
const getMesseges = () => {
  return new Promise((resolve, reject) => {
    resolve(store.getAllMessage())
  })
}
module.exports = {
  addMessage,
  getMesseges,
}
