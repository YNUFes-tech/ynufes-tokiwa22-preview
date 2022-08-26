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
    <div class="top-description">
      <h1>22常盤祭プレビューページへようこそ</h1>
      <div>
        このサイトは22常盤祭HPでの表示を確認することができます。<br>
        フォームを記入します際にこのサイトをご活用ください。
      </div>
    </div>
    <h2>出展名(改行あり)</h2>
    <textarea v-model="eventData.event_title"/>
    <h2>企画内容(短め)</h2>
    <input v-model="eventData.event_summary">
    <h2>企画説明文</h2>
    <textarea v-model="eventData.event_description"/>
    <h2>企画場所</h2>
    <input v-model="eventData.event_place_text">
    <h2>ジャンル</h2>
    <select v-model="eventData.event_genre_id">
      <option value="0">未選択</option>
      <option value="1">展示販売</option>
      <option value="2">パフォーマンス</option>
      <option value="3">ゲームスポーツ</option>
      <option value="4">デザート</option>
      <option value="5">鉄板・麺類</option>
      <option value="6">ファストフード</option>
      <option value="7">ドリンク</option>
      <option value="8">ご飯もの</option>
    </select>
    <h2>アイコン</h2>
    <h2>母団体名</h2>
    <h2>団体説明文</h2>
    <h2>団体のTwitterアカウント</h2>
    <h2>団体のFacebookアカウント</h2>
    <h2>団体のInstagramアカウント</h2>
    <h2>団体のWebサイトリンク</h2>
    <router-link to="/event-list">
      <div class="button">企画一覧ページをプレビュー</div>
    </router-link>
    <router-link to="/event-detail">
      <div class="button">企画詳細ページをプレビュー</div>
    </router-link>
  </div>
</template>

<style scoped>
.root-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: min(100%, 50rem);
  margin-inline: auto;
}

.top-description {
  border: #2c3e50 1px solid;
}

</style>