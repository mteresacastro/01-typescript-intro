
export class Person{

    // public name: string;
    // public address: string;

    //public o private lo podemos poner diractamente en el constructor

    //si le doy datos fijos al constructor, siempre que cree una instancia se volcarán esos datos.
    // constructor(){
    //     this.name = "Tere";
    //     this.address = "Sevilla";
    // } por ello lo haremos de la siguiente manera:

    constructor(public name: string, private address: string){
        this.name = name;
        this.address = address;
    }

}

//EXTENDER UNA CLASE

// export class Hero extends Person{
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,

//     ){
//         super(realName, 'New York');
//     }
// };

//debemos priorizar composición frente a herencia (no usar super), asi si hacemos cambios en una clase no modificará a las demás.

class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,

    ){
        
    }
};


const tony = new Person("Tony Stark", "New York")
const ironMan = new Hero("IronMan", 45, "Tony", tony);


console.log(ironMan);