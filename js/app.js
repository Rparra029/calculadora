'use strict'

function sumar(){
    const forma = document.getElementById('forma');
    let A = forma['operandoA'];
    let B = forma['operandoB'];
    let resultado = parseInt(A.value) + parseInt(B.value);
    if(isNaN(resultado)){
        resultado = "La operación no incluye números"
    }
    document.getElementById('resultado').innerHTML = `Resultado:  ${resultado}`;
    console.log(`Resultado:  ${resultado}`)
}

function borrar(){
    document.getElementById('borrar').addEventListener('click', ()=>{
        document.getElementById('operandoA').value= null;
        document.getElementById('operandoB').value= null;
    })
}