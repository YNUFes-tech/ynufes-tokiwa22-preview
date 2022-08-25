<script>
export default {
  data: () => ({
    eventData: {
      //それぞれのデータ項目についてはREADMEを参照
      event_title: '',
      event_summary: '',
      event_description: '',
      event_place_text: '',
      event_place_id: '',
      event_genre_id: 0,
      icon_filename: '',
      org_name: '',
      org_description: '',
      sns_twitter: '',
      sns_facebook: '',
      sns_instagram: '',
      sns_website: '',
    }
  }),
  created() {
    this.eventData = this.$store.state.eventData
  }
}

</script>
<template>
  <div class="root-wrapper">
    <h2>出展名</h2>
    <input v-model="eventData.event_title">
    <h2>企画内容(短め)</h2>
    <input v-model="eventData.event_summary">
    <h2>企画説明文</h2>
    <input v-model="eventData.event_description">
    <h2>企画場所</h2>
    <input v-model="eventData.event_place_text">
    <h2>ジャンル</h2>
    <input v-model="eventData.event_genre_id">
  </div>
</template>

<style scoped>
.root-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;;
}
</style>