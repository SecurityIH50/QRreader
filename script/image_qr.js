function image_scan(e) {
    const files = e.target.files || e.dataTransfer.files;
    //データが存在しない場合
    if (!files.length) return;
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.onload = function(theFile) {
        const image = new Image();
        image.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = this.width;
            canvas.height = this.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0);
            const imageData = ctx.getImageData(0, 0, this.width, this.height);
            const data = jsQR(imageData.data, imageData.width, imageData.height);
            if (data) {
                //アラート表示
                alert("以下のデータが見つかりました。\n"+data.data);
                //記録(別jsの関数)
                record(data.data);
                //反映
                location.reload();
            }else{
                alert("QRコードが存在しないか、読み取れません。再度お試しください。");
                location.reload();
            }
        };
        const dataURL = theFile.target.result;
        if (!dataURL || !dataURL.startsWith("data:image/")) {
            alert("QRコードが存在しないか、読み取れません。再度お試しください。");
            location.reload();
        }
        image.src = dataURL;
    };
    fileReader.readAsDataURL(file);
}