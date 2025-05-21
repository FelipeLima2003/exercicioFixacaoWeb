const form = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');

// Adiciona o evento de envio do formulário
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Impede que a página recarregue ao enviar

  const peso = parseFloat(document.getElementById("peso").value);
  let altura = document.getElementById("altura").value;


  // Verifica se os valores são válidos
  if (peso <= 0 || altura <= 0) {
    mensagem.textContent = "Por favor, insira um peso e altura válidos!";
    mensagem.className = "mensagem mensagem-erro";
    return;
  }

  // Calcula o IMC
  const imc = peso / parseFloat((altura * altura));

  // Avalia o IMC
  if (imc < 18.5) {
    mensagem.textContent = `O seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso.`;
    mensagem.className = "mensagem mensagem-sucesso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    mensagem.textContent = `O seu IMC é ${imc.toFixed(2)}. Você está com o peso normal.`;
    mensagem.className = "mensagem mensagem-sucesso";
  } else if (imc >= 25 && imc <= 29.9) {
    mensagem.textContent = `O seu IMC é ${imc.toFixed(2)}. Você está com sobrepeso.`;
    mensagem.className = "mensagem mensagem-sucesso";
  } else {
    mensagem.textContent = `O seu IMC é ${imc.toFixed(2)}. Você está obeso.`;
    mensagem.className = "mensagem mensagem-sucesso";
  }
});
