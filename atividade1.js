// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

const indice = 13;
let soma = 0;

for (let k = 0; k < indice; k++) {
    soma += k;
}

console.log(soma) // aqui printa o valor final de soma, que é 78.