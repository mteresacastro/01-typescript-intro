
let skills: string[] = ['Bash', 'Counter', 'Healing'];

//tipado de objetos: Se realiza mediante interfaz

interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; //se pone la interrogacion tras la propiedad para que sea opcional
}

const Yin: Character = {
    name: 'Yin',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing'],
    hometown: 'Rivendell'

}

console.table(Yin);

export{};