class TrainingCourse{
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
        this.firstTopic = undefined;
        this.lastTopic = undefined;
    }
    addTopic(title, date) {
        let topicTitle = title;
        let topicDate = new Date(date);

        let topicToPush = {title: topicTitle, date: topicDate};
        this.topics.push(topicToPush);
        this.topics.sort((a, b) => a.date - b.date);
        let arr = [];
        for(let topic of this.topics) {
            arr.push(topic)
        }
        this.firstTopic = arr[0];
        this.lastTopic = arr[arr.length - 1];
        return this
    };

    toString () {
        let answer = '';
        answer += `Course "${this.title}" by ${this.trainer}\n`;
        if (this.topics.length > 0) {
            for (let i = 0; i < this.topics.length; i++) {
                if(i !== this.topics.length - 1){
                    answer += ` * ${this.topics[i].title} - ${this.topics[i].date}\n`
                } else {
                    answer += ` * ${this.topics[i].title} - ${this.topics[i].date}`
                }
            }

        }
        return answer
    }
}

let js = new TrainingCourse("JS Intro", "Svetlin Nakov");
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);
js.addTopic("Maps", new Date(2016, 9, 6, 18, 0));
js.addTopic("JS Overview", new Date(2016, 8, 27, 18, 0));
js.addTopic("Program Logic", new Date(2016, 8, 29, 18, 0));
js.addTopic("Arrays", new Date(2016, 9, 3, 18, 0));
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);
let php = new TrainingCourse("PHP Intro", "Ivan Yonkov")
    .addTopic("Strings", new Date(2017, 2, 16, 18, 0))
    .addTopic("PHP First Steps", new Date(2017, 2, 12, 18, 0))
    .addTopic("Arrays", new Date(2017, 2, 14, 18, 0));

console.log("" + php);
console.log(JSON.stringify(php.lastTopic));

