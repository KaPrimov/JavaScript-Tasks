function drawBtn(text, x, y) {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let textWidth = ctx.measureText(text).width;

    ctx.lineCap = "round";
    ctx.strokeStyle = "red";
    ctx.lineWidth = 40;
    ctx.beginPath();
    ctx.moveTo(x+20, y+20);
    ctx.lineTo(x+20 + textWidth, y+20);
    ctx.stroke();

    ctx.fillStyle = 'white';
    ctx.font = '25px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x+20 + textWidth/2, y+20)

}