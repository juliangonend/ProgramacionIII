"use strict";
// //Clases y Métodos 
// class Coche{
//     marca :string;
//     modelo:string;
//     velocidad:number;
//     constructor(marca:string,modelo:string,velocidad:number){
//         this.marca=marca;
//         this.modelo=modelo;
//         this.velocidad=velocidad
//     }
//     acelerar( nuevaVelocidad:number):void{
//         this.velocidad=nuevaVelocidad
//         console.log(`FIUMMMMMMMMMMMMMM, este coche esta aceletando a una velocidad de ${this.velocidad}`)
//     }
//     frenar():void{
//         this.velocidad=0
//         console.log(`El auto se esta frenando a la velocidad ${this.velocidad}`)
//     }
//     estado():void{
//         console.log(`El auto marca ${this.marca} modelo : ${this.modelo} puede llegar a una velocidad de ${this.velocidad}`)
//     }
// }
//  let coche = new Coche('fiat', 'palio', 140)
//  coche.acelerar(180);
//  coche.frenar();
//  coche.estado()
//  //PETICIONES CON FETCH 
//  interface datosApi{
//     userId: number;
//     id:number;
//     title: string ;
// }
//  async function  fetchApi():Promise<void>{
//     const  api = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const data:datosApi[] =await  api.json()
//     const dataCompleted = data.filter((user) =>( user.completed))
//     console.log(data)
//     let user1 : datosApi = {
//         userId: dataCompleted[0].userId,
//         id:dataCompleted[0].id,
//         title: dataCompleted[0].title 
//     };
//     console.log(dataCompleted)
//     console.log(user1)
// }
//  fetchApi()
// //  interface Person {
// //     name: string;
// //     age: number;
// //   }
// //   let person2: Person = {
// //     name: "David",
// //     age: 40,
// //   };
let y = 0;
let x = 0;
const contenedor = document.getElementById('contenedor');
window.addEventListener('keypress', (event) => {
    const cubo = document.getElementById('cubo');
    if (event.key == 'w') {
        y = 1;
    }
    if (event.key == 'd') {
        x += 1;
    }
    if (event.key == 'a') {
        x -= 1;
    }
    if (event.key == 's') {
        y += 1;
    }
    // Actualiza las posiciones, manteniéndolas dentro de los límites del contenedor
    if (y < 0)
        y = 0;
    if (y > 100 - (50 / 500) * 100)
        y = 100 - (50 / 500) * 100; // Limitar y al tamaño del contenedor
    if (x < 0)
        x = 0;
    if (x > 100 - (50 / 500) * 100)
        x = 100 - (50 / 500) * 100; // Limitar x al tamaño del contenedor
    cubo.style.top = `${y}%`;
    cubo.style.left = `${x}%`;
});
