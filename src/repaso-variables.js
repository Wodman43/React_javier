// const nom = prompt('escribe tu nombre');
// const apell = prompt('escribe tu Apellidos');

//  const usuario = `Bienvenido ${nom}, ${apell}`;
//  console.log(usuario);       

// function saluda (nom,apell){

//     return `hola ${nom} ${apell}`

// }

// console.log(saluda(nom,apell));

// Objetos

// const materia = {
//     nombre: 'codigo',
//     profesor: 'Javier',
//     intensidad: '10 horas',
// }

// console.table(materia);

// const materia2 = {...materia};s
// materia2.nombre = 'javascript';
// materia2.profesor = 'Yecid';
// materia2.intensidad = '30 horas';	
// console.table(materia2);

// Arrays

// const arreglo = new Array(10);

// arreglo.push(2);
// console.log(arreglo);

// const materias =['Html', 'JSON', 'String', 'Number', 'Boolean', 'Date'];

// console.table(materias);

// const materia1 = ['ciencias','Español','Matematicas'];
// console.table(materia1);
// let profesores =[...materias];

// profesores[0] = 'Ciencias';
// profesores[3] = 'Español';

// console.table(profesores);

const numeros = [1,2,3,4,5,6,7,8,9];

let numero = [...numeros];

const num = numeros.map(function(numeros){return numeros*2});
console.table(num);



