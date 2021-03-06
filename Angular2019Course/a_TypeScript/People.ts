abstract class Employee {
    constructor(
        public name: string, 
        public age: number, 
        public salary = 0,
        public tasks: string[] = []) {}

    public work(): void {
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(this.name + currentTask)
    }

    public collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`)
    }

    public getSalary(): number {
        return this.salary;
    }
}

class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age)
        this.tasks.push(' is working on a simple task.')
    }
}


class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age)
        this.tasks.push(' is working on a complicated task.')
        this.tasks.push(' is taking time off work.')
        this.tasks.push(' is supervising unior workers.')
        
    }
}