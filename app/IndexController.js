const MessageService = require('./services/MessageService')

module.exports = {
  async send (request, response) {
    try {
      const { text } = request.body
      const result = await MessageService.sendMessage(text)
      return response.status(200).send(result)
    } catch (error) {
      console.log(error)
      return response.status(500).send({ message: 'Erro interno do servidor' })
    }
  }
}
