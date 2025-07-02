function numSec() {
  alert('Número secreto!');
  let numeroSecreto = 5;
  console.log(numeroSecreto); 

  let chute;
  let tentativas = 0; 

  while (chute != numeroSecreto) {
    chute = parseInt(prompt('Escolha um número entre 1 e 10'));
    tentativas++;

    if (chute == numeroSecreto) {
      alert(`Você acertou o número secreto ${numeroSecreto} na tentativa ${tentativas}.`);
    } else if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}. Tente novamente.`);
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
        nota = parseFloat(prompt('Digite a ' + (i + 1) + 'nota: '));
        media += nota;
    }
    alert('Média: ' + (media / quntidade).toFixed(2));
}

document.getElementById("btMed").addEventListener("click", calcMed);
