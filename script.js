// JavaScript

// console.log('Hello world!');


const btn = document.querySelector('#btn');

const image = document.querySelector('#toggle-image');
let isImage1 = true; // 現在の画像状態を管理するフラグ

btn.addEventListener('click', () => {

// ボタンの状態を切り替え
btn.classList.toggle('active'); // ボタンのクラスを切り替え

// ボタンのテキストを切り替え
if (btn.classList.contains('active')) {
  btn.textContent = 'OFF'; // ボタンのテキストを「OFF」に
} else {
  btn.textContent = 'ON'; // ボタンのテキストを「ON」に
}

 // 背景色を切り替え
 document.body.classList.toggle('black-background'); // bodyの背景色を黒に切り替え

  // 画像の切り替え
  if (isImage1) {
    image.src = 'images/raito.png'; // 2つ目の画像に切り替え
    image.alt = 'on電球';
  } else {
    image.src = 'images/raito_kuro.png'; // 元の画像に戻す
    image.alt = 'off電球';
  }
  isImage1 = !isImage1; // フラグを反転
});



//マウスに追従させる処理 （リンクに吸い付いてる時は除外する）
document.addEventListener('mousemove', function (e) {
  if (!hovFlag) {
  stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
  }
});





// 定数の定義
const loading = document.getElementById('loading');

// cssクラスを追加する関数
function animation(){
  loading.classList.add('loaded');
}

// window.addEventListener('load', animation);

// 指定秒後に動作させる
window.setTimeout( animation, 500 );
