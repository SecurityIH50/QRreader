function jump_url(dom_id){
    let jump_url_to = dom_id.value;
    window.open(jump_url_to);
}

function copy_url(dom_id){
    let copy_url_to = dom_id.value;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(copy_url_to);
        alert("クリップボードにコピーしました。");
    } else {
        alert("ご利用のブラウザーでは、この操作はできません。");
    }
}