import './style.css'
import { setupCounter } from './counter.ts'
//import './topics/01-basic-types.ts'
import './topics/02-object-inferface.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 hola mundo
`
console.log('consola activa')
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
