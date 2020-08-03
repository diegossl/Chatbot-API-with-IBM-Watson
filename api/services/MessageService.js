const AuthenticatorService = require('./AuthenticatorService')

module.exports = {
  async sendMessage (text, context) {
    const authenticatorService = AuthenticatorService.getInstance()
    const { assistant, sessionID } = await authenticatorService.getAssistant()
    const response = await assistant.message({
      input: { text: text},
      context: context,
      assistantId: process.env.ASSISTANT_ID,
      sessionId: sessionID
    })
    return response.result.output
  }
} 