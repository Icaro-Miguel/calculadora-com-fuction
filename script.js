let num1 = parseInt(prompt('digite um número.'));
let num2 = parseInt(prompt('digite outro número'));
let operacao = prompt('digite um sinal de operaçao " /, *, + ou - " ')

// utilização do fuction.

    function   soma(num1, num2) {
     return( num1+num2)
}
    function   subtracao(num1, num2) {
     return (num1-num2)
}

    function   multiplicacao(num1, num2) {
     return (num1*num2)
}

    function divisao(num1,  num2) {
     return(num1/num2)
}

// utilização do if, else if e else.
    if (operacao==="+") {
     alert(`${soma(num1, num2)}`)
}

    else if(operacao==="-"){
     alert(`${subtracao(num1, num2)}`)
}

    else if(operacao==="*"){
     alert(`${multiplicacao(num1, num2)}`)
}

    else if (operacao==="/"){
     alert(`${divisao(num1, num2)}`)
}

    else{
     alert('você não digitou um sinal válido.')
}
