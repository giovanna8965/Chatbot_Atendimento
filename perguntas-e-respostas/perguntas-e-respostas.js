const botaoMaisPerguntas = document.querySelector('.mais-perguntas');
const listaPerguntas = document.querySelector('.perguntas-respostas ul');
let perguntas = [
 {
 pergunta: 'Qual é o prazo de entrega?',
 resposta: 'Até 10 dias úteis.'
 },
 {
 pergunta: 'Como faço para trocar um produto?',
 resposta: 'Entre em contato conosco pelo chat ou telefone.'
 },
 {
 pergunta: 'Qual é a política de devolução?',
 resposta: 'Aceitamos devoluções em até 30 dias após a compra.'
 },
 {
 pergunta: 'Como faço para cancelar um pedido?',
 resposta: 'Entre em contato conosco pelo chat ou telefone para cancelar o pedido.'
 }
];
let indicePergunta = 2;
botaoMaisPerguntas.addEventListener('click', () => {
 if (indicePergunta < perguntas.length) {
 const li = document.createElement('li');
 li.innerHTML = `
 <strong>${perguntas[indicePergunta].pergunta}</strong>
 <p>${perguntas[indicePergunta].resposta}</p>
 `;
 listaPerguntas.appendChild(li);
 indicePergunta++;
 }
});