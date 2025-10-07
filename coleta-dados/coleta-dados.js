const formulario = document.querySelector('form');
const campoNome = document.getElementById('nome');
const campoEmail = document.getElementById('email');
const campoCpf = document.getElementById('cpf');
const campoNumero = document.getElementById('numero');
formulario.addEventListener('submit', (e) => {
 e.preventDefault();
 const nome = campoNome.value;
 const email = campoEmail.value;
 const cpf = campoCpf.value;
 const numero = campoNumero.value;
 if (nome && email && cpf && numero) {
 // Enviar dados para o servidor
 console.log({ nome, email, cpf, numero });
 formulario.reset();
 } else {
 alert('Preencha todos os campos!');
 }
});