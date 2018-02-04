function gradToDegree(grad) {
    grad = Number(grad);
    let degrees = 0.9 * grad;
    if (degrees >= 360){
        degrees = degrees % 360;
    }
    else if(degrees < 0 ){
        degrees = 360 - Math.abs((degrees % 360));
    }

    console.log(Math.abs(degrees));
}

gradToDegree(-50);