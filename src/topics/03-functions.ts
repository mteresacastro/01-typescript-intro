

function addNumbers (a: number, b: number){
return a+b;
}

const addNumbersArrow = (a: number, b: number):string =>{
    return `${a+b}`;
}


function multiply( firtNumber: number, secondNumber?:number, base:number = 2){
 return firtNumber*base;
}


// const result: number = addNumbers(1, 3);
// const result2: string = addNumbersArrow(1,4);
// const multiplyResult: number = multiply(5);


// console.log({result, result2});
// console.log(multiplyResult);

interface Character{
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {

    character.hp += amount;
}

const Yin: Character = {
    name: 'Yin',
    hp: 90,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`)
    }
}

healCharacter( Yin, 5);

Yin.showHp();

export {};