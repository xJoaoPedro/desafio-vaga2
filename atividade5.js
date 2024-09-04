// 5) Escreva um programa que inverta os caracteres de um string.
// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const palavra = 'turista';
const palavraPartida = [];

for (const letra of palavra) { palavraPartida.push(letra); }

for (let i = 0; i < (palavraPartida.length / 2); i++) {
    let letraHold = palavraPartida[i];
    
    palavraPartida[i] = palavraPartida[palavraPartida.length - (i + 1)];
    palavraPartida[palavraPartida.length - (i + 1)] = letraHold;
}

console.log(`Palavra original: ${palavra} \nPalavra invertida: ${palavraPartida.join('')}`)