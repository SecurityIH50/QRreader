//サイト読み込み時に実行
window.addEventListener('load', (event) => {
    //webstorageAPIが利用可能であることを確認
    if (!window.localStorage) {
        alert("ご利用中のブラウザーではご利用いただけません。");
    }
    //データがあれば反映
    var data;
    data = localStorage.getItem('value1');
    if(data){
        document.getElementById("readed_txt").innerText = "読み取ったデータ：\n"+data;
    }
});

function record(qrdata){
    localStorage.setItem('value1', qrdata);
}