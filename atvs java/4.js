function decrescendo () {
    let numerosUser = [];
    let i = 1;
    
    while (i<=4){
        numerosUser.push(parseInt(prompt("Informe o " + i + "º número:")))
        i++
    }

    numerosUser.sort(
        function(a, b) {
            return b-a
        }
    )

    alert("Joia! seus números em ordem decrescente são: " + numerosUser[0] + "," + numerosUser[1] + "," + numerosUser[2] + "," + numerosUser[3]); 
}