function numSec() {
  alert('Número secreto!');
  let numeroSecreto = Math.floor(Math.random() * (10 - 1) + 1);
  console.log(numeroSecreto); 

  let chute;
  let tentativas = 0; 

  while (chute != numeroSecreto) {
    chute = parseInt(prompt('Escolha um número entre 1 e 10'));
    tentativas++;

    if (chute == numeroSecreto) {
      alert(`Você acertou o número secreto ${numeroSecreto} na tentativa ${tentativas}.`);
    } else if (chute == null) {
      break;
    } else if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}. Tente novamente.${numeroSecreto}`);
    } else {
      alert(`O número secreto é maior que ${chute}. Tente novamente.`);
    }  
  }
}

document.getElementById("btNum").addEventListener("click", numSec);

function calcMed() {
  alert('Calculo de média!');

    let quntidade;
    let nota;
    let media = 0;
    quntidade = parseInt(prompt('Quantas notas você quer inserir?'));
    for (i = 0; i < quntidade; i++) {
        nota = parseFloat(prompt('Digite a ' + (i + 1) + ' nota: '));
        media += nota;
    }
    alert('Média: ' + (media / quntidade).toFixed(2));
}

document.getElementById("btMed").addEventListener("click", calcMed);

function calcSom() {
  alert('Calculo da soma!');

    let quntidade;
    let numero;
    let total;
    quntidade = parseInt(prompt('Quantos numero você quer somar?'));
    for (i = 0; i < quntidade; i++) {
        numero = parseFloat(prompt('Digite o ' + (i + 1) + ' numero: '));
        total += numero;
    }
    alert('Total: ' + total);
}

document.getElementById("btSoma").addEventListener("click", calcSom);
