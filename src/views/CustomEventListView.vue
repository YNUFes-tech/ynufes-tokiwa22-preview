<script setup>
import {defineProps} from "vue";
import EventWidget from "@/components/EventWidget";
import data from "@/assets/eventdata.json";
import HeaderTest2 from "@/components/HeaderTest2";
// eslint-disable-next-line no-unused-vars
const eventGenre = {
  1: "展示販売",
  2: "パフォーマンス",
  3: "ゲームスポーツ",
  4: "デザート",
  5: "鉄板・麺類",
  6: "ファストフード",
  7: "ドリンク",
  8: "ご飯もの",
};
const props=defineProps({
  EventId:{
    type: Number,
    required: true
  }
})

const eventData = data.find((d) => d.id === props.EventId)

</script>
<template>
  <HeaderTest2 :EventId="props.EventId"/>
  <div class="root-wrapper">
    <!--    //この中にレイアウトを記述する-->
    <img class="background_img" src="@/assets/background.webp" alt=""/>

    <div class="body-frame">
      <div class="content-frame">
        <div class="events_block">
          <EventWidget :eventData="
          {
            id: 1002,
            event_title: eventData.event_title,
            event_summary: eventData.event_summary,
            event_description: eventData.event_description,
            event_place_text: eventData.event_place_text,
            event_place_id: eventData.event_place_id,
            event_genre_id: eventData.event_genre_id,
            icon_filename: eventData.icon_filename,
            org_name: eventData.org_name,
            org_description: eventData.org_description,
            sns_twitter: eventData.sns_twitter,
            sns_facebook: eventData.sns_facebook,
            sns_instagram: eventData.sns_instagram,
            sns_website: eventData.sns_website
          }"/>

          <EventWidget v-for="d in data" :key="d.key" :eventData="d"/>

        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.root-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.events_block {
  box-sizing: border-box;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  max-width: 70rem;
  width: 100%;
}

.body {
  margin: 0;
  padding: 0;
  font-family: 'Klee One', cursive;
}

.background_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  z-index: -10;
}

.body-frame {
  font-family: 'Klee One', cursive;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: clip;
  min-height: calc(100vh - 360px);
  box-sizing: border-box;

  .content-frame {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 140px - 220px);
  }
}

@media screen and (max-width: 670px) {
  .body-frame {
    padding-top: 80px;
    min-height: calc(100vh - 80px - 220px);
  }
  .footer_org {
    flex-basis: auto;
  }
  nav.sitemap {
    display: none;
  }
  footer .footer_org {
    flex-basis: auto;
  }
}

//3列で表示することを考えた場合、企画リストの横幅は41.2(=13.4 + 0.5 + 13.4 + 0.5 + 13.4)
@media screen and (max-width: 41.5rem) {
  .root-wrapper {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 37.4rem) {
  .root-wrapper {
    font-size: 0.8rem;
  }
}

//ここからは2列で表示する事を考える。
//企画リストの横幅は27.3(=13.4 + 0.5 + 13.4)
@media screen and (max-width: 33.3rem) {
  .root-wrapper {
    font-size: 1rem;
  }
}

@media screen and (max-width: 27.5rem) {
  .root-wrapper {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 24.7rem) {
  .root-wrapper {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 21.9rem) {
  .root-wrapper {
    font-size: 0.7rem;
  }
}

</style>