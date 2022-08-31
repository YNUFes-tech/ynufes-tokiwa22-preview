<template>
  <nav>
    <router-link to="/">データ入力ページ</router-link> |
    <router-link to="/event-list">一覧ページ</router-link> |
    <router-link to="/event-detail">詳細ページ</router-link>
  </nav>
  <router-view/>
  <ModalsContainer/>
</template>
<script>
window.onbeforeunload = function () {
  return '現在のデータは保存されません。ページを離れてもよろしいですか?';
};
</script>
<style>
#app {
  font-family: 'Klee One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  margin: 0;
}

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
