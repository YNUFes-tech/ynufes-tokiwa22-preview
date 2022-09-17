<template>
  <router-view/>
</template>
<script>
window.onbeforeunload = function () {
  return '現在のデータは保存されません。ページを離れてもよろしいですか?';
};
export default {

}
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

</style>
