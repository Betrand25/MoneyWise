document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('spendingChart').getContext('2d');
    const spendingChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['00', '03', '06', '9', '12', '15', '18','21', '24'],
            datasets: [{
                label: 'Expenses',
                data: [0, 0, 0, 1500000, 0, 0, 0, 0,0],
                borderColor: '#9038AF',
                // backgroundColor: 'rgba(144, 56, 175, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
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
                        color: '#FC7200',
                        font: {
                            size: 16  
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Hourly Expenses',
                    align: 'start',
                    color: 'white',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });

    // Custom element to display total Expenses in top-right corner
    const customLegendContainer = document.createElement('div');
    customLegendContainer.style.position = 'absolute';
    customLegendContainer.style.top = '10px';
    customLegendContainer.style.right = '10px';
    customLegendContainer.style.color = 'white';
    customLegendContainer.style.fontSize = '12px';
    customLegendContainer.style.textAlign = 'right';

    const expenseLabel = document.createElement('div');
    expenseLabel.textContent = 'Income';
    expenseLabel.style.color = '#2ecc71'; 
    customLegendContainer.appendChild(expenseLabel);

    const totalExpenses = spendingChart.data.datasets[0].data.reduce((a, b) => a + b, 0);
    const expenseValue = document.createElement('div');
    expenseValue.textContent = 'Rp ' + totalExpenses.toLocaleString();
    customLegendContainer.appendChild(expenseValue);

    document.querySelector('.chart-container').appendChild(customLegendContainer);

    spendingChart.update();
});
