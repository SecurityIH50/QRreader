window.addEventListener('load', (event) => {
    //デフォルト状態にする
    camera_stop();
});

//デフォルト
function camera_stop(){
    const stop_button = document.getElementById("stop_camera");
    stop_button.style.backgroundColor = "gray"
    stop_button.disabled = "disabled";
}

function camera_start(){
    const stop_button = document.getElementById("stop_camera");
    const start_button = document.getElementById("start_camera");
    start_button.style.backgroundColor = "gray"
    start_button.disabled = "disabled";
    stop_button.style.backgroundColor = "red";
    stop_button.disabled = null;
}