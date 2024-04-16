function imparOuPar () {
    var numero = 0;
    var transform = 0; 
    numero = parseInt(prompt("Digite um número inteiro:"));

    if (numero % 2 === 0 ) {
        transform = numero + 1;
        alert("O número que você informou é par. Transformamos ele em ímpar, então agora seu valor é " + transform);
    } else {
        transform = numero - 1;
        alert("O número que você informou é ímpar. Transformamos ele em par, então agora seu valor é " + transform);
    }
}