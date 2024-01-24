function jump_url(dom_id){
    let jump_url_to = dom_id.value;
    window.open(jump_url_to);
}

function copy_url(dom_id){
    let copy_url_to = dom_id.value;
    try {
        navigator.clipboard.writeText(copy_url_to);
        console.log(copy_url_to);
        alert("クリップボードにコピーしました。");
    } catch (error) {
        alert("申し訳ありませんが、コピー中に問題が発生しました。\nエラーの詳細：\n\n"+error);
    }
}