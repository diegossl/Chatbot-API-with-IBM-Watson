<template>
  <label for="textInput" class="inputOutline">
    <input
      v-bind="$attrs"
      v-bind:value="value"
      v-on:keyup.enter="$emit('message', $event.target.value)"
      id="textInput"
      class="input responsive-column"
      autofocus
      placeholder="Diga alguma coisa..."
      type="text"
    />
  </label>
</template>
