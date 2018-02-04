function figureArea([w, h, W, H]) {
    let [s1, s2, s3] = [w*h, W*H, Math.min(W, w) * Math.min(H, h)];
    return s1 + s2 - s3;
}