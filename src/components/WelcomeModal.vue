<template>
  <div style="background: white" class="modal-frame">
    <h1>22常盤祭プレビューページへようこそ</h1>
    <div>
      このサイトは22常盤祭HPでの表示を確認することができます。
      <h2>⚠️利用にあたって注意⚠️</h2>
      <ol>
        <li>このサイト上で入力したデータは<b>保存されません</b></li>
        <li>このサイト上でデータの<b>提出はできません</b>。ご案内しましたGoogle Formよりご記入ください。</li>
        <li>本プレビューサイトは実際のサイトの見え方を保証するものではありません。</li>
      </ol>
      <h2>✨確認をするポイント🔎</h2>
      <ol>
        <li>すべてのデータを入力して表示がおかしくならないか</li>
        <li>画面のサイズを変更した時に表示がおかしくならないか</li>
      </ol>
    </div>
  </div>
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
  margin-inline: auto;
  padding: 1rem;
  border-radius: 1rem;
  border: black solid 1px;
  margin: 0 0.5rem;

  > h1 {
    margin: 0;
  }
}

ol {
  text-align: start;
  margin: 0;
}

h2 {
  margin: 0;
}
</style>