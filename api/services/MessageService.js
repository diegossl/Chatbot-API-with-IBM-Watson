const Env = require('../config/Env')
const AuthenticatorService = require('./AuthenticatorService')

module.exports = {
  async sendMessage (text, context) {
    const { assistant, sessionID } = await AuthenticatorService.getAssistant()
    const response = await assistant.message({
      input: { text: text},
      context: context,
      assistantId: Env.get('ASSISTANT_ID'),
      sessionId: sessionID
    })
    return response.result.output
  }
} 