function cone([r, h]) {
    [r, h] = [r, h].map(Number);
    let volume = Math.PI*r*r*h/3;
    let s = Math.sqrt(r*r +  h*h);
    let area = Math.PI * r * (r + s);
    console.log("volume= " + volume);
    console.log("area = " + area);
}