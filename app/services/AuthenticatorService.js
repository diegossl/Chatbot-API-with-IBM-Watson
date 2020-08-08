const AssistantV2 = require('ibm-watson/assistant/v2')
const { IamAuthenticator } = require('ibm-watson/auth')
require('dotenv').config()

class AuthenticatorService {
  async getAssistant () {
    const credentials = {
      authenticator: new IamAuthenticator({ apikey: process.env.API_KEY }),
      url: process.env.URL,
      version: process.env.VERSION
    }
    const assistant = new AssistantV2(credentials)
    const { result } = await assistant.createSession({
      assistantId: process.env.ASSISTANT_ID
    })
    const sessionId = result.session_id
    return { assistant, sessionId }
  }
}

module.exports = new AuthenticatorService().getAssistant()
