const formulario = document.querySelector('form');
const campoNome = document.getElementById('nome');
const campoEmail = document.getElementById('email');
const campoMensagem = document.getElementById('mensagem');
formulario.addEventListener('submit', (e) => {
 e.preventDefault();
 const nome = campoNome.value;
 const email = campoEmail.value;
 const mensagem = campoMensagem.value;
 if (nome && email && mensagem) {
 // Enviar dados para o servidor
 console.log({ nome, email, mensagem });
 formulario.reset();
 } else {
 alert('Preencha todos os campos!');
 }
});