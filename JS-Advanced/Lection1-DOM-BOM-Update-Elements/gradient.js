function gradient() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove );
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        let widthToShow = event.offsetX / (event.target.clientWidth - 1);
        widthToShow = Math.trunc(widthToShow * 100);
        document.getElementById('result').textContent = widthToShow + '%';
    }
    function gradientOut() {
        document.getElementById('result').textContent = '';
    }

}