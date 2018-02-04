function distance([v1, v2, time]) {
    v1 = Number(v1);
    v2 = Number(v2);
    time = Number(time);
    time /= 3600;

    let distance1 = v1 * time;
    let distance2 = v2 * time;

    let delta = (Math.abs(distance1 - distance2) * 1000);

    console.log(delta);
}

distance(['5', '-5', '40']);