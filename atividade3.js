// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const fs = require('fs');

const dados = fs.readFileSync('dados.json', 'utf-8');
const jsonDados = JSON.parse(dados);

let menorFaturamento = 0;
let maiorFaturamento = 0;

let diasComFaturamento = 0;
let faturamentoTotal = 0;
let diasAcimaDaMedia = 0;

jsonDados.forEach(diaVerificado => {
    if (diaVerificado.valor != 0) {
        diasComFaturamento++;
        faturamentoTotal += diaVerificado.valor;

        if (diaVerificado.valor > maiorFaturamento) {
            maiorFaturamento = diaVerificado.valor;
        }

        if (diaVerificado.dia == 1) {
            menorFaturamento = diaVerificado.valor;
        } else if (diaVerificado.valor < menorFaturamento) {
            menorFaturamento = diaVerificado.valor;
        }
    }
});

jsonDados.forEach(diaVerificado => {
    if (diaVerificado.valor != 0) {
        if (diaVerificado.valor >= (faturamentoTotal / diasComFaturamento)) {
            diasAcimaDaMedia++;
        }
    }
});

console.log(menorFaturamento); // printa o menor faturamento entre os dias, 373.7838
console.log(maiorFaturamento); // printa o maior faturamento entre os dias, 48924.2448
console.log(diasAcimaDaMedia); // printa o numero de dias com faturamento acima da media, 10