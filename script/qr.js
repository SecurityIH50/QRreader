document.getElementById("start_camera").onclick = function(){
    //スタイル(別jsによって定義)
    camera_start();
    //カメラ使用
    const video  = document.getElementById("camera_image");
    navigator.mediaDevices.getUserMedia({
        //マイク不使用
        audio: false,
        video: {
            width:{min:720},
            height:{min:1280},
            facingMode: {
                //外側のカメラを使用を強制
                exact: 'environment'
            }
        }
    })
    .then(function(stream) {
        //html側に書き込み（表示）
        video.srcObject = stream;
        video.onloadedmetadata = function(e) {
            video.play();
        }
        return(checkImage());
    })
    .catch(function(error) {
        //ブラウザ非対応の場合
        alert("ご利用中のブラウザではご利用いただけません。\n\nエラーの詳細：\n"+error);
        window.close();
    });

    //QR解析
    const canvas = document.getElementById('js-canvas');
    const ctx = canvas.getContext('2d');

    //QR読み取り
    function checkImage(){
        try {
            // 取得している動画をCanvasに描画
            console.log(ctx);
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            // Canvasからデータを取得
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            // jsQRに渡す
            const code = jsQR(imageData.data, canvas.width, canvas.height);
            // QRコードの読み取りに成功したらアラート開く
            // 失敗したら再度実行
            if (code) {
                alert("以下のデータが見つかりました。\n"+code.data);
                //カメラのHTML側への反映を消す
                video.pause();
                document.getElementById("camera_image").style.display = "none";
                //カメラの動作を止める
                //けど動作させっぱなしでもいいような気がする（将来的に改善）
                //読み取ったデータをHTML側に書き込む
                document.getElementById("readed_txt").innerText = code.data;
                //codeのデータを消す（次回以降用）
                //AND条件で実装？
                //記録(別jsの関数)
                record(code.data);
                //サイトをリロード（カメラのリセット）
                location.reload();
            } else {
                setTimeout(() => { return(checkImage()) }, 200);
            }
        } catch (error) {
            alert(error);
        }
    }
}

//中断操作
document.getElementById("stop_camera").onclick = function(){
    location.reload();
}

/*
[2023年6月15日]までに動作確認済みのユーザーエージェント
[Android]
Galaxy A52 Edge最新版
Galaxy A52 Chrome最新版

[iPhone]
iPhone13 Safari最新版
*/