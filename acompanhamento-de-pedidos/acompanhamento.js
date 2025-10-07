const formulario = document.querySelector('form');
const campoNumeroPedido = document.getElementById('numero-pedido');
const divStatusPedido = document.querySelector('.status-pedido');
const statusPedidos = {
1: 'Em preparo',
2: 'Em transporte',
3: 'Entregue'
};
formulario.addEventListener('submit', (e) => {
e.preventDefault();
const numeroPedido = campoNumeroPedido.value;
if (numeroPedido) {
const statusPedido = getStatusPedido(numeroPedido);
divStatusPedido.innerHTML = `Status do pedido: ${statusPedido}`;
} else {
divStatusPedido.innerHTML = 'Insira o número do pedido!';
}
});
function getStatusPedido(numeroPedido) {
// Simulando uma requisição ao servidor para obter o status do pedido
const status = statusPedidos[Math.floor(Math.random() * 3) + 1];
return status;
}