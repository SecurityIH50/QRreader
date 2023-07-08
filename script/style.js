const stop_button = document.getElementById("stop_camera");
const start_button = document.getElementById("start_camera");

window.addEventListener('load', (event) => {
    //不要な要素を削除しておく
    document.getElementById("reader").style.display = "none";
    //ボタンをデフォルト状態にする
    camera_stop();
});

//デフォルト
function camera_stop(){
    //カメラがストップ状態の時の状態
    //ストップボタンを無効化
    stop_button.style.backgroundColor = "gray";
    stop_button.disabled = "disabled";
}

function camera_start(){
    //カメラが動作中の時の状態
    //ストップボタンを活性化してスタートボタンを無効化
    start_button.style.backgroundColor = "gray"
    start_button.disabled = "disabled";
    stop_button.style.backgroundColor = "red";
    stop_button.disabled = null;
}