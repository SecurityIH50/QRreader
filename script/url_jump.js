function jump_url(dom_id){
    let jump_url_to = dom_id.value;
    window.open(jump_url_to);
}

function copy_url(dom_id){
    let copy_url_to = dom_id.value;
    /*
    try {
        navigator.clipboard.writeText(copy_url_to);
        console.log(copy_url_to);
        alert("クリップボードにコピーしました。");
    } catch (error) {
        alert("申し訳ありませんが、コピー中に問題が発生しました。\nエラーの詳細：\n\n"+error);
    }
    */
    navigator.clipboard.writeText(copy_url_to).then(function() {
        console.log('コピー成功\n'+copy_url_to);
        alert("クリップボードにコピーしました。");
    }).catch(function(err) {
        console.error('コピー失敗', err);
        alert("クリップボードへのコピーに失敗しました。\nこのブラウザーでは利用できない可能性があります。\n一般的なブラウザーを使用されている場合は、クリップボードへのアクセスが拒否されていないか確認してください。")
    });
}