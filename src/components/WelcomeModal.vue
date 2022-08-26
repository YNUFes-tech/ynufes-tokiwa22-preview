<script setup>
import {ref} from "vue";

const showModal = ref(true);
</script>
<template>
  <vue-final-modal v-model="showModal" class="modal-base">
    <div style="background: white" class="modal-frame">
      <h1>22常盤祭プレビューページへようこそ</h1>
      <div>
        このサイトは22常盤祭HPでの表示を確認することができます。
        <h2>⚠️利用にあたって注意⚠️</h2>
          <ol>
            <li>このサイト上で入力したデータは<b>保存されません</b></li>
            <li>このサイト上でデータの<b>提出はできません</b>。ご案内しましたGoogle Formよりご記入ください。</li>
          </ol>
        <h2>✨確認をするポイント🔎</h2>
        <ol>
          <li>すべてのデータを入力して表示がおかしくならないか</li>
          <li>画面のサイズを変更した時に表示がおかしくならないか</li>
        </ol>
      </div>
    </div>
  </vue-final-modal>
</template>
<style scoped lang="scss">
.modal-base {
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: center;
}

.modal-frame {
  width: fit-content;
  max-width: unquote("calc(100vw - 2rem)");
  margin-inline: auto;
  margin-top: 3rem;
  padding: 1rem;
  border-radius: 1rem;
}
ol{
  text-align: start;
  margin: 0;
}
h2{
  margin: 0;
}
</style>