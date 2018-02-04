function result() {
    class Person {
        constructor(name, email) {
            this.email = email;
            this.name = name;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, subject: ${this.subject})`
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, course: ${this.course})`
        }
    }

    return {Person, Teacher, Student}
}


let classes = result();
let Student = classes.S
let ivan = new Student('ivan', 'sadasd@asdas.com', 'math');

console.log(ivan.toString());
