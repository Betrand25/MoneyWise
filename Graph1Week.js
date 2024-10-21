document.addEventListener('DOMContentLoaded', (event) => {
    const ctx2 = document.getElementById('spendingChart2').getContext('2d');
    const spendingChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            datasets: [
                {
                    label: 'Food',
                    data: [50000, 100000, 250000, 200000, 75000, 85000, 240000],
                    backgroundColor: '#BE2449'
                },
                {
                    label: 'Fashion',
                    data: [300000, 0, 0, 150000, 0, 0, 150000],
                    backgroundColor: '#f1c40f'
                },
                {
                    label: 'Entertainment',
                    data: [0, 70000, 0, 0, 0, 80000, 50000],
                    backgroundColor: '#9b59b6'
                },
                {
                    label: 'Transport',
                    data: [15000, 20000, 0, 15000, 50000, 75000, 25000],
                    backgroundColor: '#e67e22'
                },
                {
                    label: 'Health',
                    data: [0, 0, 250000, 0, 0, 0,250000],
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
