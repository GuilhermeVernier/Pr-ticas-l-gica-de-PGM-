alert('Boas vindas ao nosso site');
let chute
let numeroSecreto = 7;
//quando for puxar uma variável, não precisa adicionar as Aspas
console.log(numeroSecreto)

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');

    if (chute > numeroSecreto) {
        alert('O número secreto é menor');
    } if (chute < numeroSecreto) {
        alert('O número secreto é maior ');
    }
}
// se o chute for igual o numero secreto, ele vai imprimir a mensagem Isso ai! Você descobriu o número secreto.
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);


