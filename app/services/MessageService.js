const AuthenticatorService = require('./AuthenticatorService')

module.exports = {
  async sendMessage (text, context) {
    const { assistant, sessionId } = await AuthenticatorService.getAssistant()
    const response = await assistant.message({
      input: { text: text },
      context: context,
      assistantId: process.env.ASSISTANT_ID,
      sessionId: sessionId
    })
    return response.result.output.generic
  }
}
