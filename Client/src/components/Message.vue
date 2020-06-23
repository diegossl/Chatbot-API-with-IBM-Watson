<template>
  <div id="chat">
    <div class="message-inner">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    message: String
  }
}
</script>
