
// la <T> se usa para definir los genericos, y luego se pueden concretar en cada uso de la función.

export function whatsMyType<T>( argument: T): T{

    return argument;
}

let amIString = whatsMyType<string>('Hola Mundo');
let amIArray = whatsMyType<string[]>(['hola', 'Mundo']);
let amINumber = whatsMyType<number>(100);

console.log(amIArray.join('-'));
console.log(amIString.split(''));
console.log(amINumber.toFixed());