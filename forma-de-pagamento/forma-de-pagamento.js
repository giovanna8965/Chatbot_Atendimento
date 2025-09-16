JavaScript (formas_pagamento.js)
const listaPagamentos = document.querySelectorAll('.formas-pagamento li');
listaPagamentos.forEach((item) => {
item.addEventListener('mouseover', () => {
item.style.background = '#ddd';
});
item.addEventListener('mouseout', () => {
item.style.background = '#f7f7f7';
});
});