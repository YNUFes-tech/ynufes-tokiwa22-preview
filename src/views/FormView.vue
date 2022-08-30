<script>
import WelcomeModal from "@/components/WelcomeModal";

export default {
  components: {WelcomeModal},
  data: () => ({
    eventData: {
      //それぞれのデータ項目についてはREADMEを参照
      event_title: '',
      event_summary: '',
      event_description: '',
      event_place_text: '',
      event_place_id: '',
      event_genre_id: 0,
      // icon_filename: '',
      org_name: '',
      org_description: '',
      sns_twitter: '',
      sns_facebook: '',
      sns_instagram: '',
      sns_website: '',
    },
    imgData: {
      src: '',
      type: '',
      width: 0,
      height: 0
    }
  }),
  created() {
    this.eventData = this.$store.state.eventData
    this.imgData = this.$store.state.imgData
  },
  methods: {
    processIcon: function () {
      if (this.imgData.src) {
        URL.revokeObjectURL(this.imgData.src)
      }
      const file = this.$refs.image.files[0]
      this.imgData.src = URL.createObjectURL(file)
    }
  }
}

</script>
<template>
  <div class="root-wrapper">
    <WelcomeModal/>
    <div class="form-item">
      <h2>出展名</h2>
      <ul>
        <li>改行も適用されます。(最大2行まで)(改行を行う際は、GoogleFormに改行した状態で記入してください。)</li>
        <li>一行最低全角9文字まで入るようにしています。</li>
      </ul>
      <textarea v-model="eventData.event_title"/>
    </div>
    <div class="form-item">
      <h2>企画内容(短め)</h2>
      <textarea v-model="eventData.event_summary"/>
    </div>
    <div class="form-item">
      <h2>企画説明文</h2>
      <ul>
        <li>改行も適用されます。</li>
        <li>ここに記入した内容は保存されません</li>
      </ul>
      <textarea v-model="eventData.event_description"/>
    </div>
    <div class="form-item">
      <h2>企画場所</h2>
      <input v-model="eventData.event_place_text"/>
    </div>
    <div class="form-item">
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
    </div>
    <div>
      <h2>アイコン</h2>
      <!--画像が指定されていない場合にはnoimageを表示する-->
      <img :src="this.imgData.src?this.imgData.src:'/icon/noimage.png'">
    </div>
    <input type="file" ref="image" @change="processIcon"/>
    <div class="form-item">
      <h2>母団体名</h2>
      <input v-model="eventData.org_name"/>
    </div>
    <div class="form-item">
      <h2>団体説明文</h2>
      <ul>
        <li>改行も適用されます。</li>
        <li>ここに記入した内容は保存されません</li>
      </ul>
      <textarea v-model="eventData.org_description"/>
    </div>
    <div class="form-item">
      <h2>団体のTwitterアカウント</h2>
      <input v-model="eventData.sns_twitter"/>
    </div>
    <div class="form-item">
      <h2>団体のFacebookアカウント</h2>
      <input v-model="eventData.sns_facebook"/>
    </div>
    <div class="form-item">
      <h2>団体のInstagramアカウント</h2>
      <input v-model="eventData.sns_instagram"/>
    </div>
    <div class="form-item">
      <h2>団体のWebサイトリンク</h2>
      <input v-model="eventData.sns_website"/>
    </div>
    <router-link to="/event-list">
      <div class="button">企画一覧ページをプレビュー</div>
    </router-link>
    <router-link to="/event-detail">
      <div class="button">企画詳細ページをプレビュー</div>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.root-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: unquote("min(100%, 50rem)");
  margin-inline: auto;
}

.top-description {
  border: #2c3e50 1px solid;
  padding: 1rem;
}


ol, ul {
  text-align: start;
  margin: 0.4em 0;
}

.form-item {
  box-sizing: border-box;
  padding: 1rem;
  width: unquote("min(100%, 40rem)");

  h2 {
    margin: 0;
  }

  textArea {
    width: unquote("min(100% - 2rem, 35rem)");
    height: 5rem;
  }

  img {
    width: 300px;
    height: 300px;
  }
}

.button {
  width: fit-content;
  padding: 0.5rem;
  border: #0a0a8c 2px solid;
  border-radius: 1rem;
  margin: 1rem;
}

a {
  text-decoration: none;
}
</style>