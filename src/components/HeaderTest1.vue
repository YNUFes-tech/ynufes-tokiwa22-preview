<template>
  <nav>
    <router-link :to="{name:'DataForm'}">データ入力ページ</router-link> |
    <router-link to="/event-list">一覧ページ</router-link> |
    <router-link to="/event-detail">詳細ページ</router-link>
  </nav>
</template>

<script>
export default {
  name: "HeaderTest1"
}
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