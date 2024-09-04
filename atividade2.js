// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
// escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence
// ou não a sequência.
// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

let fibo1 = 0;
let fibo2 = 1;
const numeroVerificado = 21; // numero que será verificado se pertence à sequência

while (fibo2 != numeroVerificado && fibo2 <= numeroVerificado) {
    fibo1 = fibo1 + fibo2;
    fibo2 = fibo1 + fibo2;
}

if (fibo1 == numeroVerificado || fibo2 == numeroVerificado) {
    console.log(`:) O número verificado pertence a sequência fibonacci: ${numeroVerificado}`);
} else {
    console.log(`:( O número verificado NÃO pertence a sequência fibonacci: ${numeroVerificado}`);
}