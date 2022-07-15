
class Calculadora{
    constructor(){
        alert("ejecutando calculadora")
    }
 sumar(num1,num2){
     num1 = prompt("primer numero para sumar")
     num2 = prompt("segundo numero para sumar")
    let resultado = parseInt(num1) + parseInt(num2)
     alert(`tu resultado es ${resultado}`)
}
 restar(num1,num2){
     num1 = prompt("primer numero para restar")
     num2 = prompt("segundo numero para restar")
    let resultado = parseInt(num1) - parseInt(num2)
     alert(`tu resultado es ${resultado}`)
}
 multiplicar(num1,num2){
     num1 = prompt("primer numero para multiplicar")
     num2 = prompt("segundo numero para multiplicar")
    let resultado = parseInt(num1) * parseInt(num2)
     alert(`tu resultado es ${resultado}`)
}
 dividir(num1,num2){
     num1 = prompt("primer numero para dividir")
     num2 = prompt("segundo numero para dividir")
    let resultado = parseInt(num1) / parseInt(num2)
     alert(`tu resultado es ${resultado}`)
}
}   

const calculadora = new Calculadora()
let operacion 

while(operacion != 5 ){
   operacion = prompt("1: suma,  2: resta,  3: multiplicacion,  4: division, 5: salir")
if(operacion == 1){
    calculadora.sumar()
}
else if(operacion == 2){
    calculadora.restar()
}
else if(operacion == 3){
    calculadora.multiplicar()
   
}
else if(operacion == 4){
    calculadora.dividir()
    
}
else if(operacion == 5){
    alert("cerrando calculadora")
    
}
}