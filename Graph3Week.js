document.addEventListener('DOMContentLoaded', (event) => {
    const ctx2 = document.getElementById('spendingChart2').getContext('2d');
    const spendingChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            datasets: [
                {
                    label: 'Basic Salary',
                    data: [1500000, 0, 0, 0,0,0,0],
                    backgroundColor: '#BE2449'
                },
                {
                    label: 'Salary Benefit',
                    data: [0,0, 0, 0, 0,0,0,0],
                    backgroundColor: '#f1c40f'
                },
                {
                    label: 'Entertainment',
                    data: [0, 0, 0, 0,500000,0,500000],
                    backgroundColor: '#9b59b6'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    position: 'right',  
                    ticks: {
                        callback: function(value) {
                            return 'Rp ' + value.toLocaleString();
                        },
                        color: 'white'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#FC7200'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    spendingChart2.update();

    // Membuat legenda kustom untuk chart 2
    const customLegend2 = document.getElementById('custom-legend2');
    spendingChart2.data.datasets.forEach((dataset, index) => {
        const legendItem = document.createElement('div');
        legendItem.classList.add('legend-item');

        const label = document.createElement('div');
        label.classList.add('legend-label');
        label.style.color = dataset.backgroundColor;
        label.textContent = dataset.label;
        legendItem.appendChild(label);

        const total = dataset.data.reduce((a, b) => a + b, 0);
        const value = document.createElement('div');
        value.classList.add('legend-value');
        value.textContent = 'Rp ' + total.toLocaleString();
        legendItem.appendChild(value);

        customLegend2.appendChild(legendItem);
    });
});
