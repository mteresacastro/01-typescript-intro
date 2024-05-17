
export interface Product{
    description: string;
    price: number;
}

const phone:Product = {
    description: 'Nokia A1',
    price: 150,

}

const tablet:Product = {
    description: 'iPad air',
    price: 250,
}

interface TaxCalculationOptions{
    tax:number;
    products: Product[];
}

//function taxCalculation( options: TaxCalculationOptions): number[]{ // en lugar de numbre[] podemos poner [number, number]
//function taxCalculation( {tax, products}: TaxCalculationOptions): number[]{
export function taxCalculation( options: TaxCalculationOptions): number[]{

    const {tax, products} = options
    
    let total = 0;
    //sin des
    // options.products.forEach( product => {
    //     total += product.price;
    // });
    //con des
    products.forEach( ({price}) => {
        total += price;
    });

    return [total, total*tax];
}

const shoppingCart = [phone, tablet];

const tax = 0.15

//sin desestructuracion
// const result = taxCalculation({
//     products: shoppingCart,
//     tax: tax, //PODEMOS DEJARLO SOLO EN tax, PORQUE JS SABE QUE NOS ESTAMOS REFIRIENDO A LA VARIABLE CON EL MISMO NOMBRE
// })
//
//console.log('Total:'+ result[0]);
//console.log('Tax:'+ result[1]);
//
//con desestructuracion

const [products, iva] = taxCalculation({
    products: shoppingCart,
    tax: tax, //PODEMOS DEJARLO SOLO EN tax, PORQUE JS SABE QUE NOS ESTAMOS REFIRIENDO A LA VARIABLE CON EL MISMO NOMBRE
})

console.log('Total:'+ products);
console.log('Tax:'+ iva);

