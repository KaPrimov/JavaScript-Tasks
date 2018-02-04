function orderRectangles(rectsData) {
    function createRect(width, height) {
        let rect = {
            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: function (otherRect) {
                let result = otherRect.area() - rect.area();
                return result || (otherRect.width - rect.width)
            }
        };
    return rect
    }

    let rects = [];
    for(let [width, height] of rectsData) {
        let rect = createRect(width, height);
        rects.push(rect)
    }
    rects.sort((a,b) => a.compareTo(b));
    return rects;
}
orderRectangles([[3, 4], [5, 3], [3, 4], [3, 5], [12, 1]]);

