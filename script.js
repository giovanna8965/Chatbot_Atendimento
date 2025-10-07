script.js
const dadosVendas = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  datasets: [{
    label: 'Vendas 2022',
    data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }, {
    label: 'Vendas 2023',
    data: [15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data: dadosVendas,
  options: {
    title: {
      display: true,
      text: 'Vendas Anuais'
    },
    legend: {
      position: 'bottom'
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

const graficoVendas = new Chart(document.getElementById('grafico-vendas'), config);
