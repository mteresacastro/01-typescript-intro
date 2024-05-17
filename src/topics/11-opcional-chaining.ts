

export interface Passenger{
    name: string;
    children?: string[];

}

const passenger1: Passenger = {
    name:'Fernando'
};
const passenger2: Passenger = {
    name:'Tere',
    children:['Ari','Luka']
};

const printChildren = ( passenger: Passenger) => {

    const howManyChildren = passenger.children?.length || 0; // se puede usar el OR, y si es undefined, dara valor 0.
    
    console.log(passenger.name, howManyChildren);
};

printChildren(passenger2);

printChildren(passenger1);
