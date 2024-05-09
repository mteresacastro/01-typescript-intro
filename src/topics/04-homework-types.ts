/*
    ===== Código de TypeScript ===== Tarea: Realizar la interfaz del objeto superHeroe
*/
// MI SOLUCION:

// interface SuperHero {
//     name: string;
//     age: number;
//     address: {
//         calle: string;
//         pais: string;
//         ciudad: string;
//     };
//     showAddress:() => string;
// }

// OTRA SOLUCION PROPUESTA, SEPARAR ADdRESS EN OTRA INFERFAZ: 

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress:() => string;
}

interface Address{
    street: string;
    country: string;
    city: string;
}

//truco: si colocas cursor sobre alguna porpiedad y pulsas F2 la cambias y enter, se cambia en todos lados.

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};