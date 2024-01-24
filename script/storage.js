//グローバル変数
let localst_data = new Array();
const div_input = document.getElementById("readed_txt");

//サイト読み込み時に実行（書込み動作）
window.addEventListener('load', (event) => {
    //webstorageAPIが利用可能であることを確認
    if (!window.localStorage) {
        alert("ご利用中のブラウザーではご利用いただけません。");
    }
    //データがあれば反映する
    let data_alive = true;
    let data_dead;
    let data_index = 1;
    while (data_alive) {
        let recorded_data_cache =  localStorage.getItem(data_index);
        if(recorded_data_cache){
            localst_data.push(recorded_data_cache);
            data_index++;
        }else{
            data_alive = false;
            //一つもデータがなかった場合
            if(data_index==1){
                data_dead = true;
            };
        }
    }
    localst_data.reverse();
    let new_element_p,new_element_button,new_element_button2;
    if(data_dead){
        new_element_p = document.createElement('p');
        new_element_p.textContent = "過去に読み取ったデータがありません。";
        div_input.appendChild(new_element_p);
    }else{
        for (let index = 0; index < localst_data.length; index++) {
            //url表示
            new_element_p = document.createElement('p');
            new_element_p.textContent = localst_data[index];
            //new_element_p.setAttribute("onclick","jump_url(this)");
            new_element_p.setAttribute("class","readed_txt_input_to");
            div_input.appendChild(new_element_p);
            //URLを開く
            new_element_button = document.createElement('button');
            new_element_button.textContent = "このURLを開く";
            new_element_button.setAttribute('class','url_open_button');
            new_element_button.setAttribute('value',localst_data[index]);
            new_element_button.setAttribute("onclick","jump_url(this)");
            div_input.appendChild(new_element_button);
            //URLをコピーする
            new_element_button2 = document.createElement('button');
            new_element_button2.textContent = "このURLをコピー";
            new_element_button2.setAttribute('class','url_copy_button');
            new_element_button2.setAttribute('value',localst_data[index]);
            new_element_button2.setAttribute("onclick","copy_url(this)");
            div_input.appendChild(new_element_button2);
        }
    }
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