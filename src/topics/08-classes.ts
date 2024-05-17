
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


const ironMan = new Person("Jonh", "Madrid");


console.log(ironMan);