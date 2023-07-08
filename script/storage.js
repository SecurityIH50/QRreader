//グローバル変数
let localst_data = localStorage.getItem('recorded_data');

//サイト読み込み時に実行（書込み動作）
window.addEventListener('load', (event) => {
    //webstorageAPIが利用可能であることを確認
    if (!window.localStorage) {
        alert("ご利用中のブラウザーではご利用いただけません。");
    }
    //データがあれば反映する
    if(localst_data){
        localst_data.reverse();
        let localst_length = localst_data.length();
        let htmlinput_text;
        for (let index = 0; index < localst_length; index++) {
            htmlinput_text = htmlinput_text + localst_data[index] + "\n";
        }
        document.getElementById("text_input_to").innerText = htmlinput_text;
    }else{
        document.getElementById("text_input_to").innerText = "データが存在しません。";
    }
});


//記録動作
function record(qrdata){
    if(!localst_data){
        localst_data = new Array()
    };
    localst_data.push(qrdata);
    localStorage.setItem('recorded_data',localst_data);
}


//消去動作
document.getElementById("clear_data").onclick = function(){
    //消去
    let confirm_result = confirm("過去に読み取ったデータを全て消去します。\nよろしいですか？");
    if(confirm_result){
        localStorage.clear();
        alert("過去に読み取ったデータを全て消去しました。");
    }else{
        alert("消去作業を中止しました。");
    }
}