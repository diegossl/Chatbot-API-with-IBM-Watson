const AuthenticatorService = require('./AuthenticatorService')

module.exports = {
  async sendMessage (text) {
    const response = await (await AuthenticatorService).assistant.message({
      input: { text: text },
      assistantId: process.env.ASSISTANT_ID,
      sessionId: (await AuthenticatorService).sessionId
    })
    return response.result.output.generic
  }
}
