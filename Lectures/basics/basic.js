class Player {
    constructor(name, type){
        this.name = name;
        this.type = type
    }

    introduce(){
        console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor (name, type){
        super(name, type)
    }
}


const wizard = new Wizard("Harry", "Healer");
wizard.introduce()
