<script setup>
const eventData = {
  "id": 1001,
  "type": "Youtube企画",
  "tag_color": "#e010c1",
  "img": "1001.webp",
  "event_name": "茶道研究会　活動の記録",
  "org_name": "横浜国立大学茶道研究会",
  "event_description": "私たち茶道研究会の普段の活動の様子を記録しました。普段あまり茶道に触れない方も多いと思うので、今回の動画をきっかけに少しでも茶道について知って頂ければ嬉しく思います。",
  "org_description": "私達のサークル、茶道研究会は「研究会」とついていますが他の大学で言う茶道部と同じ活動をしています。 活動場所は主に大学会館4階の奥の｢かもめ｣という和室です。 基本的に月水金の放課後に活動しているので、 気軽に遊びに来てください。",
  "twitter": "@yokokoku_chaken",
  "instagram": "",
  "website": "https://ynuchaken.tyanoyu.net/",
  "event_type": 2,
  "pdf": "",
  "youtube": "HjuxDdxdIPw",
  "link": ""
}
</script>
<template>
  <div class="root-wrapper">
    <div class="event-detail">
      <div class="event-detail-title">
        <div class="kikakudanntaimei">
          {{ eventData.org_name }}
        </div>
        <h1 class="tenzimei">
          {{ eventData.event_name }}
        </h1>
        <div>
          場所・日時：{{ eventData.event_type }}
        </div>
      </div>
      <div class="event-detail-description">
        <div class="event-icon">
          <img :src="`/icon/`+eventData.img">
        </div>
        <div class="event-description">
          <p>
            {{ eventData.event_description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.root-wrapper {
  display: flex;
  flex-direction: column;

  background-image: url("/public/background.png");
  background-size: cover;
  background-attachment: fixed;

  align-items: center;
  margin: 0 auto;;

  color: white;
}

.event-detail {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  max-width: 800px;
  padding: 5rem;
  background-size: contain;
}

.event-detail-title {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.tenzimei {
  width: 18rem;
  font-size: 2.5rem;
}

.event-detail-description {
  display: flex;
  border-radius: 5px;
  align-items: flex-start;
  letter-spacing: 5px;
  line-height: 2;
  text-align: left;
}

.event-icon  > img{
  max-width: 400px;
  padding: 1rem;
  flex: 1;
}

.event-description {
  width: 100%;
  text-transform: capitalize;
  padding: 1rem;
}

p::first-letter {
  font-size: 38px;
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