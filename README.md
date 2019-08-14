# TapiTapi
タピオカの行列を解消するアプリ＆POSシステム

## 概要
タピオカの注文をスマホで選択し、店舗でQRコードをかざすだけで注文ができるアプリ。
店舗側ではQRコードを読み取ると管理画面に注文が表示される。
用意できた注文からエンターキーで管理画面から削除可能。

##詳細
アプリで店舗を選択して、メニュー・オプションを選択します。
注文を確定するとQRコードが発行されるので、選択した店舗の読み取り機にかざします（店舗が異なるとエラーが表示されます）
読み取りが成功すると、アプリには番号札が、管理画面には番号札に紐付いたメニューが表示されます。

## Demo
[![TapiTapiデモ動画](http://img.youtube.com/vi/US6m29JXudo/0.jpg)](http://www.youtube.com/watch?v=US6m29JXudo)

## アプリ(スマートフォン用)

https://tapitapi-f601b.firebaseapp.com/

## 管理画面(パソコン用)
管理画面は店舗ごとに用意してあります。

https://tapitapi-f601b.firebaseapp.com/management/:storeId

例: https://tapitapi-f601b.firebaseapp.com/management/2

## QR読み取り(タブレット用)
QR読み取りは店舗ごとに用意してあります。

https://tapitapi-f601b.firebaseapp.com/qr/:storeId

例: https://tapitapi-f601b.firebaseapp.com/qr/2

