<script setup>
const eventData = {
  "id": 1001,
  "event_title": "サンプル企画1",
  "event_place_text": "都市900",
  "event_place_color": "都市",
  "event_genre_id": "1",
  "icon_filename": "/img/sample_icon_1.2764c44b.png",
  "org_name": "団体名1",
};
const eventGenre = {
  "1": "展示販売",
  "2": "パフォーマンス",
  "3": "ゲームスポーツ",
  "4": "デザート",
  "5": "鉄板・麺類",
  "6": "ファストフード",
  "7": "ドリンク",
  "8": "ご飯もの",
};
const eventPlace = {
  "都市": "toshi",
  "経済": "keizai",
  "経営": "keiei",
}
</script>
<template>
  <div class="root-wrapper">
    <!--    //この中にレイアウトを記述する-->
    <img class="background_img" src="@/assets/background_img.png" alt=""/>

    <div class="body-frame">
      <div class="content-frame">
        <div class="events_block">
          <div class="event_widget">
            <img :src="eventData.icon_filename"/>
            <div class="tag_area">
              <div v-bind:class="'event_genre_' + eventData.event_genre_id"> {{eventGenre[eventData.event_genre_id]}}</div>
              <div v-bind:class="'event_place_text_' + eventPlace[eventData.event_place_color]">{{ eventData.event_place_text }}</div>
            </div>
            <div class="meta_area">
              <h2>
                {{ eventData.event_title }}
              </h2>
              <hr>
              <div class="org_name">
                {{ eventData.org_name }}
              </div>
            </div>
          </div>
          <div class="event_widget">
            <img src="@/assets/sample_icon_1.png"/>
            <div class="tag_area">
              <div class="event_genre_1">展示販売</div>
              <div class="event_place_text_toshi">都市901</div>
            </div>
            <div class="meta_area">
              <h2>
                テスト企画名テスト1
              </h2>
              <hr>
              <div class="org_name">
                企画テスト団体
              </div>
            </div>
          </div>
          <div class="event_widget">
            <img src="@/assets/sample_icon_2.png"/>
            <div class="tag_area">
              <div class="event_genre_2">パフォーマンス</div>
              <div class="event_place_text_keizai">経済902</div>
            </div>
            <div class="meta_area">
              <h2>
                テスト企画名テスト2
              </h2>
              <hr>
              <div class="org_name">
                企画テスト団体
              </div>
            </div>
          </div>
          <div class="event_widget">
            <img src="@/assets/sample_icon_2.png"/>
            <div class="tag_area">
              <div class="event_genre_3">ゲームスポーツ</div>
              <div class="event_place_text_keiei">経営903</div>
            </div>
            <div class="meta_area">
              <h2>
                テスト企画名テスト3
              </h2>
              <hr>
              <div class="org_name">
                企画テスト団体
              </div>
            </div>
          </div>
          <div class="event_widget">
            <img src="@/assets/sample_icon_4.png"/>
            <div class="tag_area">
              <div class="event_genre_4">デザート</div>
              <div class="event_place_text_toshi">都市904</div>
            </div>
            <div class="meta_area">
              <h2>
                テスト企画名テスト4
              </h2>
              <hr>
              <div class="org_name">
                企画テスト団体
              </div>
            </div>
          </div>
          <div class="event_widget">
            <img src="@/assets/sample_icon_5.png"/>
            <div class="tag_area">
              <div class="event_genre_5">鉄板・麺類</div>
              <div class="event_place_text_keizai">経済905</div>
            </div>
            <div class="meta_area">
              <h2>
                テスト企画名テスト5
              </h2>
              <hr>
              <div class="org_name">
                企画テスト団体
              </div>
            </div>
          </div>
          <div class="event_widget">
            <img src="@/assets/sample_icon_1.png"/>
            <div class="tag_area">
              <div class="event_genre_6">ファストフード</div>
              <div class="event_place_text_keiei">経営906</div>
            </div>
            <div class="meta_area">
              <h2>
                テスト企画名テスト6
              </h2>
              <hr>
              <div class="org_name">
                企画テスト団体
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer>
        <div class="footer_wrapper">
          <nav class="sitemap">
            <ul>
              <li><a style="color: white">常盤祭について</a></li>
              <li><a style="color: white">更新情報</a></li>
              <li><a style="color: white">企画を探す</a></li>
              <li><a style="color: white">ご協賛について</a></li>
              <li><a style="color: white">Q&A</a></li>
              <li><a style="color: white">相互リンク</a></li>
            </ul>
          </nav>
          <div class="footer_org">
            <div class="logos_area">
              <img src="https://ynu-fes.yokohama/wp-content/uploads/2020/02/cropped-YNUFES-%E3%83%AD%E3%82%B4.jpg"
                   alt="YNUFES logo"/>
              <div class="sns">
                <a><img class="hover-to-shrink" src="@/assets/twitter_logo.png" alt="twitter"/></a>
                <a><img class="hover-to-shrink" src="@/assets/instagram_logo.png" alt="instagram"/></a>
                <a><img class="hover-to-shrink" src="@/assets/facebook_logo.png" alt="facebook"/></a>
              </div>
            </div>
            <div class="organ_area">
              <div>
                <h3>横浜国立大学<br>大学祭実行委員会</h3>
                〒240-0067<br>神奈川県横浜市保土ヶ谷区常盤台79-1
                <br>文化サークル棟1F
                <br>大学祭実行委員会室
                <br> ynu.fes.c☆gmail.com
                <br> ※☆を＠に変えてメールをお送りください。
              </div>
            </div>
          </div>
        </div>
        <div style="font-size: 0.8rem; padding-top:1rem">Copyright &#169;2022 横浜国立大学 大学祭実行委員会</div>
      </footer>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.root-wrapper {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;;

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

  .event_widget {
    border-radius: 0.5rem;
    width: 10rem;
    background: #00000077;
    position: relative;
    text-overflow: ellipsis;

    > img {
      border-top-right-radius: 0.5rem;
      border-top-left-radius: 0.5rem;
      width: 100%;
    }

    > .tag_area {
      position: relative;
      margin: 0.3rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.2rem;

      > div {
        font-size: 0.78rem;
        color: white;
        padding: 0.05rem 0.1rem;
        border-radius: 0.4rem;
        border: 0.08rem solid ;
        border-color: #ffffff99 ;
      }
      > .event_place_text_toshi{
        background-color: #00adb5;
      }
      > .event_place_text_keizai{
        background-color: #ff5722;
      }
      > .event_place_text_keiei{
        background-color: #eeeeee;
        color: black;
      }
      > .event_genre_1{
        background-color: #004b79;
      }
      > .event_genre_2{
        background-color: #7f181b;
      }
      > .event_genre_3{
        background-color: #56a0d3;
      }
      > .event_genre_4{
        background-color: #537b35;
      }
      > .event_genre_5{
        background-color: #ecb731;
      }
      > .event_genre_6{
        background-color: #b4a996;
        color: black;
      }
      > .event_genre_7{
        background-color: #d7d7d8;
      }
      > .event_genre_8{
        background-color: #6d6e70;
      }
    }

    > .meta_area {
      color: white;
      margin: 0.7rem;

      h2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        max-height: 2.8rem;
        overflow: hidden;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        font-size: 1.2rem;
        line-height: 1.4rem;
        padding: 0;
        margin: 0;
      }
    }

    > hr {
      margin: 0;
      padding: 0;
    }

  }
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
/*ここからフッター*/
footer {
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  color: white;
  background: #131516;
  width: 100%;
  z-index: 50;

  .footer_wrapper {
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .sitemap {
    flex-basis: 30%;
    font-size: 1.2rem;
    margin: 1rem 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > ul {
      margin: auto;
    }
  }

  .footer_org {
    flex-basis: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .logos_area {
      margin: 1rem 0 0 2rem;
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;

      > img {
        margin-left: 0.3rem;
        width: 10rem;
        border-radius: 10px;
      }

      .sns {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;

        img {
          height: 3rem;
          @media screen and (max-width: 470px) {
            height: 2rem;
          }
        }
      }

      @media screen and (max-width: 470px) {
        flex-direction: column;
        margin-left: 0;
        .sns {
          flex-direction: row;
        }
        > img {
          width: 9rem;
        }
      }
      @media screen and (max-width: 470px) {
        > img {
          margin-bottom: 1rem;
          width: 7rem;
        }
      }
    }

    .organ_area {
      margin-top: 10px;
      font-size: 0.9rem;
      margin-left: 3rem;

      h3 {
        padding: 0;
        margin: 0;
        font-size: 1.2rem;
        line-height: 1.1;
      }

      @media screen and (max-width: 70rem) {
        margin-left: 1rem;
        font-size: 0.7rem;
      }
      @media screen and (max-width: 400px) {
        h3 {
          font-size: 18px;
        }
        margin-left: 0.5rem;
        font-size: 10px;
        line-height: 1.2;
      }
    }
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
</style>