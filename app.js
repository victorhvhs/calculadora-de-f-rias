let nome = prompt ('Ola! Qual seu nome?');
alert (`Ola ${nome}! Esse código irá te ajudar a calcular suas férias.`);
let salarioMensal = Number(prompt ('Qual seu salário mensal? (Separe centavos com ponto ex 222.12)'));
let diasDisponiveis = Number(prompt ('Quantos dias de férias você tem direito? (Somente números)'));
let vendaDeDias = Number(prompt ('Quantos dias ira vender? (Somente números)'));
//let gozoDeFerias = prompt ('quantos dias você irá tirar?');


let valorDe1_3 = Math.round (salarioMensal * (1 / 3));
console.log (valorDe1_3);
let valorDeFerias = Math.round ((salarioMensal /30) * diasDisponiveis);
console.log (valorDeFerias);
let abonoPecuniario = Math.round ((valorDeFerias/ diasDisponiveis) * vendaDeDias);
console.log (abonoPecuniario);
let valorDe1_3Abono = Math.round ((abonoPecuniario /3));
console.log (valorDe1_3Abono);
let valorTotalDeFerias = (valorDe1_3 + valorDeFerias + abonoPecuniario + valorDe1_3Abono);
alert (`O valor total de suas férias é: R$ ${valorTotalDeFerias}`);