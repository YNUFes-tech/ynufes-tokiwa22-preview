<template>
  <nav>
    <router-link :to="`/event-list/`+props.EventId">一覧ページ</router-link> |
    <router-link :to="`/event-detail/`+props.EventId">詳細ページ</router-link>
  </nav>
</template>

<script>
export default {
  name: "HeaderTest2"
}
</script>

<script setup>
import {defineProps} from "vue";

const props=defineProps({
  EventId: {
    type: Number,
    required: true
  }
})

</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>