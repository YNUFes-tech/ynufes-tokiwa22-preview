<script setup>

</script>
<template>
  <div class="root-wrapper">
    <div class="content">
      <h2>母団体名org_name</h2>
      <h1>出展名event_title</h1>
      <h3>場所:event_place</h3>
      <p>企画説明event_description</p>
    </div>
  </div>
</template>

<style scoped>
.root-wrapper {
  display: flex;
  flex-direction: column;
  /*margin: 0 auto;*/
  /*background: #2c3e50;*/
  background-image: url("/public/background.png");
  background-size: cover;
  background-attachment: fixed;
}

.content {
  color: white;
  margin: 300px;
  text-align: left;
  animation-name:fadeUpAnime;
  animation-duration:0.5s;
  animation-fill-mode:forwards;
  opacity:0;
}

@keyframes fadeUpAnime{
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


</style>