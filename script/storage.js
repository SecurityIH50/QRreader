//グローバル変数
let localst_data = new Array();

//サイト読み込み時に実行（書込み動作）
window.addEventListener('load', (event) => {
    //webstorageAPIが利用可能であることを確認
    if (!window.localStorage) {
        alert("ご利用中のブラウザーではご利用いただけません。");
    }
    //データがあれば反映する
    let data_alive = true;
    let data_index = 1;
    let htmlinput_text;
    while (data_alive) {
        let recorded_data_cache =  localStorage.getItem(data_index);
        if(recorded_data_cache){
            localst_data.push(recorded_data_cache);
            data_index++;
        }else{
            data_alive = false;
            //一つもデータがなかった場合
            if(data_index==1){
                htmlinput_text = "データが存在しません。";
            };
        }
    }
    localst_data.reverse();
    for (let index = 0; index < localst_data.length; index++) {
        if(htmlinput_text){
            htmlinput_text = htmlinput_text + localst_data[index] + "\n";
        }else{
            htmlinput_text = localst_data[index] + "\n";
        }
    }
    document.getElementById("text_input_to").innerText = htmlinput_text;
});


//記録動作
function record(qrdata){
    let last_data = localst_data.length + 1;
    localStorage.setItem(last_data,qrdata);
}


//消去動作
document.getElementById("clear_data").onclick = function(){
    //消去
    let confirm_result = confirm("過去に読み取ったデータを全て消去します。\nよろしいですか？");
    if(confirm_result){
        localStorage.clear();
        alert("過去に読み取ったデータを全て消去しました。");
        location.reload();
    }else{
        alert("消去作業を中止しました。");
    }
}