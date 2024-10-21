document.addEventListener('DOMContentLoaded', (event) => {
    const ctx2 = document.getElementById('spendingChart2').getContext('2d');
    const spendingChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['W1', 'W2', 'W3', 'W4'],
            datasets: [
                {
                    label: 'Food',
                    data: [600000, 500000, 400000, 300000],
                    backgroundColor: '#BE2449'
                },
                {
                    label: 'Fashion',
                    data: [800000, 700000, 600000, 500000],
                    backgroundColor: '#f1c40f'
                },
                {
                    label: 'Entertainment',
                    data: [300000, 400000, 200000, 300000],
                    backgroundColor: '#9b59b6'
                },
                {
                    label: 'Transport',
                    data: [500000, 400000, 300000, 200000],
                    backgroundColor: '#e67e22'
                },
                {
                    label: 'Health',
                    data: [200000, 150000, 100000, 80000],
                    backgroundColor: '#2ecc71'
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
