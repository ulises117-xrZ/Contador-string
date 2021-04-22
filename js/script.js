/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

//jasjasjas esto es una practica que no tiene nada que ver
//con los ejercicios
// let label = document.querySelector('.formulario__label');
// let input = document.querySelector('.formulario__input').value;
// let boton = document.getElementById('enviar');


// let tipode = typeof(input)
// console.log(tipode)

// boton.addEventListener('click', function dataType(a){
//     a = input;
//     if(tipode === "number"){
//         console.log("esto es un numero");
//     }
//     else if(tipode === "string"){
//         console.log("esto es una cadena de texto");
//     }
//     else if(tipode === "boolean"){
//         console.log("esto es un tipo de dato boolean");
//     }
// });

//ayuda aun no se como quitar el coso

let label = document.querySelector('.formulario');
let input = document.querySelector('.formulario__input').value;
let button = document.getElementById('enviar');

button.addEventListener('click', (largo)=>{
    largo = input;
    let nuevo =largo.replace(/\s+/g, '');
    alert(`el numero de caracteres que tiene esta palabra es ${nuevo.length}`)
    
})

//muestra el numero mayor;
let texto = document.querySelector('.form__Label');
let num1 = document.querySelector('.form__Input1').value;
let num2 = document.querySelector('.form__Input2').value;
let num3 = document.querySelector('.form__Input3').value;
let boton = document.querySelector('.form__botoncito');

boton.addEventListener('click', (valor1, valor2, valor3)=>{
    valor1 = parseInt(num1);
    valor2 = parseInt(num2);
    valor3 = parseInt(num3);
    
    if (valor1 > valor2 && valor1> valor3){
        alert(`el numero ${valor1} es mayor que ${valor2} y ${valor3}`);
    }
    else if (valor2> valor1 && valor2 > valor3){
        alert(`el numero ${valor2} es mayor que ${valor1} y ${valor3}`)
    } 
    else if(valor3 > valor1 && valor3 > valor2){
        alert(`${valor3} es mayor que ${valor1} y ${valor2}`);
    } 
    else if (valor2 === valor3 && valor2 === valor1){
        alert( `los numeros ${valor1}, ${valor2} y ${valor3} son exactamente iguales perro`);
    }
    
    else if (valor1 === valor2 && valor3 > valor1){
        alert( `los numeros ${valor1} y ${valor2} son exactamente iguales perfro pero el numero ${valor1} es mayor`);
    }
    else if (valor1 === valor2 && valor3 < valor1){
        alert( `los numeros ${valor1} y ${valor2} son exactamente iguales perfro pero el numero ${valor1} es menor`);
    }
    else if (valor1 === valor3 && valor2> valor1){
        alert( `los numeros ${valor1} y ${valor3} son exactamente iguales pedrro pero el numero ${valor2} es mayor`);
    }
    else if (valor1 === valor3 && valor2< valor1){
        alert( `los numeros ${valor1} y ${valor3} son exactamente iguales pedrro pero el numero ${valor2} es menor`);
    }
    else if (valor2 === valor3 && valor1> valor2){
        alert( `los numeros ${valor2} y ${valor3} son exactamente iguales pero el numero ${valor1}es mayor`);
    }
    else if (valor2 === valor3 && valor1< valor2){
        alert( `los numeros ${valor2} y ${valor3} son exactamente iguales pero el numero ${valor1}es menor`);
    }
})
