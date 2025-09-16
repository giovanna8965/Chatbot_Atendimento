const elementoHorario = document.querySelector('.horario-funcionamento');
// Função para atualizar o horário de funcionamento dinamicamente
function atualizarHorario() {
const data = new Date();
const diaSemana = data.getDay();
const hora = data.getHours();
if (diaSemana >= 1 && diaSemana <= 5) {
// Segunda a sexta
if (hora >= 9 && hora < 18) {
elementoHorario.innerHTML += '<p>Estamos abertos!</p>';
} else {
elementoHorario.innerHTML += '<p>Estamos fechados. Volte amanhã!</p>';
}
} else if (diaSemana === 6) {
// Sábado
if (hora >= 9 && hora < 14) {
elementoHorario.innerHTML += '<p>Estamos abertos!</p>';
} else {
elementoHorario.innerHTML += '<p>Estamos fechados. Volte segunda!</p>';
}
} else {
// Domingo
elementoHorario.innerHTML += '<p>Estamos fechados. Volte segunda!</p>';
}
}
atualizarHorario();