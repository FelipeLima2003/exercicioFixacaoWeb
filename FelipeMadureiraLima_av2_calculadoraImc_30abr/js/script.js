const form = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');

// Adiciona o evento de envio do formulário
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Impede que a página recarregue ao enviar

  const peso = parseFloat(document.getElementById("peso").value);
  let altura = document.getElementById("altura").value;


  // Verifica se os valores são válidos
  if (peso <= 0 || altura <= 0) {
    message(`Por favor insira um peso e altura correto`, 'error');
    return;
  }

  // Calcula o IMC
  const imc = peso / parseFloat((altura * altura));

  // Avalia o IMC
    if (imc < 18.5) {
    mensagem.textContent = `O seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso.`;
    mensagem.className = "mensagem mensagem-erro";
    message(`Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso.`, 'error');

  } else if (imc >= 18.5 && imc <= 24.9) {
    mensagem.textContent = `O seu IMC é ${imc.toFixed(2)}. Você está com o peso normal.`;
    mensagem.className = "mensagem mensagem-sucesso";
    message(`Seu IMC é ${imc.toFixed(2)}. Peso normal!`, 'success');

  } else if (imc >= 25 && imc <= 29.9) {
    mensagem.textContent = `O seu IMC é ${imc.toFixed(2)}. Você está com sobrepeso.`;
    mensagem.className = "mensagem mensagem-erro";
    message(`Seu IMC é ${imc.toFixed(2)}. Sobrepeso.`, 'error');

  } else {
    mensagem.textContent = `O seu IMC é ${imc.toFixed(2)}. Você está obeso.`;
    mensagem.className = "mensagem mensagem-erro";
    message(`Seu IMC é ${imc.toFixed(2)}. Obesidade.`, 'error');
  }
// ...
function message(text, status = 'success') {
    Toastify({
        text: text,
        duration: 2000,
        style: {
            background: status === 'success' ? '#84cc16' : '#dc2626',
            boxShadow: 'none'
        }
    }).showToast();
}})