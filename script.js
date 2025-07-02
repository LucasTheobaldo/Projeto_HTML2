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
    } else if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}. Tente novamente.`);
    } else if (chute < numeroSecreto){
      alert(`O número secreto é maior que ${chute}. Tente novamente.`);
    }  
  }
}

document.getElementById("btNum").addEventListener("click", numSec);

function calcMed() {
  alert('Calculo de média!');

    let quantidade;
    let nota;
    let media = 0;
    do {
      quantidade = parseInt(prompt('Quantas notas você quer inserir?'));
      if (quantidade === null) {
          return false;          
        }
      if (quantidade == 0) {
          alert('Ao menos uma nota precissa ser inserida!');
      }
    } while (quantidade == 0);
    
    for (i = 0; i < quantidade; i++) {
        nota = parseFloat(prompt('Digite a ' + (i + 1) + ' nota: '));
        if (nota === null) {
          return false;          
        }    
        media += nota;
    }
    alert('Média: ' + (media / quantidade).toFixed(2));
}

document.getElementById("btMed").addEventListener("click", calcMed);

function calcSom() {
  alert('Calculo da soma!');

    let quantidade;
    let numero;
    let total = 0;
    do {
      quantidade = parseInt(prompt('Quantos numero você quer somar?'));
      if (quantidade === null) {
        return false;          
      }
      if (quantidade <= 1) {
        alert('Ao menos dois numeros precissam ser inseridos!');
      }
    } while (quantidade <= 1);
    
    for (i = 0; i < quantidade; i++) {
        numero = parseFloat(prompt('Digite o ' + (i + 1) + ' numero: '));
        if (numero === null) {
          return false;         
        }
        total += numero;
    }
    alert('Total: ' + total);
}

document.getElementById("btSoma").addEventListener("click", calcSom);
