# ynufes-tokiwa22-preview

22常盤祭プレビューサイト作成用のレポジトリです。

# サイトの構成
- FormView: プレビューするデータを入力するフォーム
  - path: /
  - 補足: フォームに入力されたデータはVuexと同期させる
  - 担当: 市川
- EventListView: 企画一覧画面をプレビュー
  - path: /event_list
  - 担当: 祖父江
- EventDetailView: 企画詳細画面をプレビュー
  - path: /event_detail
  - 担当: 大谷、吉田

# データ項目について
## 概要
- 出展名
  - 企画書に記載のものと同じ
- 企画内容(短い)
  - 企画書に記載のものと同じ
- 企画説明文
  - 字数制限なし
- 企画場所
  - 例: 都市204
- ジャンル
  - 以下から一つのみ選択
    - 展示販売
    - パフォーマンス
    - ゲームスポーツ
    - デザート
    - 鉄板・麺類
    - ファストフード
    - ドリンク
    - ご飯もの
  - 企画一覧ページでのタグ表示は食品5項目まとめて「食品」とする
  - 企画詳細ページでのタグ表示は「食品」タグと個別タグを併記する
- アイコンのファイル名
  - 例: 1001.webp
  - アイコンは以下の場所に保存される
- 団体説明文
  - 任意の項目
- 母団体名
  - 企画書に記載のものと同じ
- 団体のTwitterアカウント
  - 任意の項目
- 団体のFacebookアカウント
  - 任意の項目
- 団体のInstagramアカウント
  - 任意の項目
- 団体のWebサイトリンク
  - 任意の項目

[実際の企画団体者用フォームはこちら](https://docs.google.com/forms/d/e/1FAIpQLScpwBltF-y7PyfcZkM6gcTk88El0pqTP9-HFBqlsdRPUkLFZA/viewform)

## 実際のデータ項目
- event_title: 出展名
- event_summary: 企画内容(短い)
- event_description: 企画説明文
- event_place_text: 企画場所(テキスト)
- event_place_id: 企画場所(ID), プレビューサイトでは使用しない
- event_genre_id: ジャンル
  - 1: 展示販売
  - 2: パフォーマンス
  - 3: ゲームスポーツ
  - 4: デザート
  - 5: 鉄板・麺類
  - 6: ファストフード
  - 7: ドリンク
  - 8: ご飯もの
- icon_filename: アイコンのファイル名
- org_name: 母団体名
- org_description: 団体説明文
- sns_twitter: 団体のTwitterアカウント
- sns_facebook: 団体のFacebookアカウント
- sns_instagram: 団体のInstagramアカウント
- sns_website: 団体のWebサイトリンク

## コマンド系
### プロジェクトのセットアップ
```
yarn install
```
### 開発用サーバーの立ち上げ
```
yarn serve
```