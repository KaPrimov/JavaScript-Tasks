function draw() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let direction = true;

    let ball = { x: 0, y: 40};

    function animate() {
        ctx.clearRect(0, 0, 800, 600);
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, 40, 0, Math.PI*2);
        ctx.fill();
        if (direction){
            ball.x += 5;
            if (ball.x >= 770) {
                direction = false;
            }
        } else {
            ball.x -= 5;
            if (ball.x <= 30) {
                direction = true
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}
