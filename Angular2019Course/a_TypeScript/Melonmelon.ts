abstract class Melon {
    readonly elementIndex: number;
    constructor(public weight: number, public melonSort: string) {
        this.elementIndex = weight * this.getName().length;
    }

    public abstract getName(): string;

    public toString = () => {
        console.log(`Element ${this.getName().replace('melon', '')}`)
        console.log(`Sort: ${this.getName()}`)
        console.log(`Element Index: ${this.elementIndex}`)
    }
}

class Airmelon extends Melon {
    getName(): string {
        return "Airmelon";
    }
}

class Earthmelon extends Melon {
    getName(): string {
        return "Earthmelon";
    }
}

class Firemelon extends Melon {
    getName(): string {
        return "Firemelon";
    }
}

class Watermelon extends Melon {
    getName(): string {
        return "Watermelon";
    }
}


class Melonmelon {
    public melon: any;

    constructor(public weight: number, public melonSort:string) {
        this.melon = new Watermelon(weight, melonSort);
    }

    morph = () => {
        if (this.melon.getName().startsWith('Water')) {
            this.melon = new Firemelon(this.weight, this.melonSort)
        } else if (this.melon.getName().startsWith('Fire')) {
            this.melon = new Earthmelon(this.weight, this.melonSort)
        }else if (this.melon.getName().startsWith('Earth')) {
            this.melon = new Airmelon(this.weight, this.melonSort)
        }else if (this.melon.getName().startsWith('Air')) {
            this.melon = new Watermelon(this.weight, this.melonSort)
        }
    }
    public toString = () => {
        return this.melon.toString();
    }

}

let watermelon : Melonmelon = new Melonmelon(12.5, "Kingsize");
console.log(watermelon.toString());
watermelon.morph();
console.log(watermelon.toString());
