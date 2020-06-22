const Env = require('../config/Env')
const AssistantV2 = require('ibm-watson/assistant/v2')
const { IamAuthenticator } = require('ibm-watson/auth')

var instance = null

class AuthenticatorService {
  static getInstance () {
    if (!instance) {
      instance = new AuthenticatorService()
    }
    return instance
  }
  async getAssistant () {
    const credentials = {
      authenticator: new IamAuthenticator({ apikey: Env.get('ASSISTANT_API_KEY') }),
      url: Env.get('ASSISTANT_URL'),
      version: Env.get('ASSISTANT_VERSION')
    }
    const assistant = new AssistantV2(credentials)
    const { result } = await assistant.createSession({
      assistantId: Env.get('ASSISTANT_ID')
    })
    const sessionID = result.session_id
    return { assistant, sessionID }
  }
}

module.exports = AuthenticatorService