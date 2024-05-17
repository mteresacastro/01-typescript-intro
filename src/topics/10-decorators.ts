function classDecorator(
    constructor: any
){
    return class extends constructor{
        newProperty = "New Property";
        hello = "override";
    }
}

classDecorator //los decoradores inician con @ algunos ejemplos: @Component, @Directive, @Pipe, @Injectable...
export class SuperClass {

    public myProperty: string = "abc123";

    print() {
        console.log('Hola Mundo');
    }
}
console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);