<template>
  <div class="chat-column">
    <Message
      v-bind:message="message"
      v-bind:class="{ active: from-user }"
    />
    <Input v-on:message="sendMessage" />
  </div>
</template>

<script>
import Message from '@/components/Message'
import Input from '@/components/Input'

export default {
  name: 'Home',
  components: { Message, Input },
  data: function () {
    return { message: '' }
  },
  methods: {
    sendMessage: async function (message) {
      this.message = message
    },
    receiveMessage: async function () {}
  }
}
</script>
