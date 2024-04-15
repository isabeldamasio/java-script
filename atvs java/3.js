function ganhoBruto() {
    var i = 1;
    var soma = 0;
    var numero = 0;
    while (i <= 12) {
        numero = parseFloat(prompt("Digite o ganho bruto do mês " + (i) + ":"));

        if (i <= 12) {
            soma = soma + numero;
        }
        i++;
    }

    alert("O seu ganho bruto total é: " + soma);

    var i = 1;
    var sub = 0;
    var numero = 0;
    while (i <= 12) {
        numero = parseFloat(prompt("Digite quanto foi gasto no mês " + (i) + ":"));

        if (i <= 12) {
            sub = sub + numero;
        }
        i++;
    }

    alert("O seu gasto anual foi de : " + sub);

    var saldao;
    saldao = soma - sub
    if (saldao > 0) {
        alert("Você obteve um lucro de :" + saldao);
    } else {
        alert("Você obteve um prejuízo de :" + saldao);
    }
}