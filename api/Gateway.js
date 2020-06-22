const MessageService = require('./services/MessageService')

module.exports = {
  async send (request, response) {
    try {
      const { text, context = {} } = request.body
      const result = await MessageService.sendMessage(text, context)
      return response.status(200).send(result)
    } catch (error) {
      return response.status(500).send({ message: 'Erro interno do servidor' })
    }
  }
}
