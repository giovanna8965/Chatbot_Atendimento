const formulario = document.querySelector('form');
const campoData = document.getElementById('data');
const campoHora = document.getElementById('hora');
formulario.addEventListener('submit', (e) => {
 e.preventDefault();
 const data = campoData.value;
 const hora = campoHora.value;
 if (data && hora) {
 // Enviar dados para o servidor
 console.log({ data, hora });
 formulario.reset();
 } else {
 alert('Preencha todos os campos!');
 }
});