//カウントダウンの終了日時を指定
const EndTime = new Date("2021/6/19 19:59:59");
//タイマーを表示する要素
const output = document.getElementById("count_down_timer");
// タイマーを表示させる関数
function displayTime(diff) {
  if (diff > 0) {
    output.innerHTML =
      "開始まで " + d + "日" + h + "時間" + m + "分" + s + "秒";
  } else {
    output.innerHTML = "始まります";
  }
}
//指定日時までの時間を計算する関数
function calcRemainingTime() {
  //現在日時を取得
  const NowTime = new Date();
  //差分
  const diff = EndTime - NowTime;
  //計算
  d = Math.floor(diff / (24 * 60 * 60 * 1000));
  h = Math.floor(diff / (60 * 60 * 1000)) % 24;
  m = Math.floor(diff / (60 * 1000)) % 60;
  s = (Math.floor(diff / 1000) % 60) % 60;
  //表示
  displayTime(diff);
}
//実行間隔を設定
calcRemainingTime();
setInterval(calcRemainingTime, 1000);
