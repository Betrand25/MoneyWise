document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('spendingChart').getContext('2d');
    const spendingChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['W1', 'W2', 'W3', 'W4'],
            datasets: [{
                label: 'Expenses',
                data: [3500000, 2000000, 1500000, 500000],
                backgroundColor: 'rgba(46, 204, 113, 0.2)',
                borderColor: '#2ecc71',
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
                    text: 'March',
                    align: 'start',
                    color: 'white',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });

    // Custom element to display Expenses in top-right corner
    const customLegendContainer = document.createElement('div');
    customLegendContainer.style.position = 'absolute';
    customLegendContainer.style.top = '10px';
    customLegendContainer.style.right = '10px';
    customLegendContainer.style.color = 'white';
    customLegendContainer.style.fontSize = '16px';
    customLegendContainer.style.textAlign = 'right';

    const expenseLabel = document.createElement('div');
    expenseLabel.textContent = 'Expenses';
    expenseLabel.style.color = '#2ecc71'; 
    customLegendContainer.appendChild(expenseLabel);

    const expenseValue = document.createElement('div');
    expenseValue.textContent = 'Rp 6.100.000';
    customLegendContainer.appendChild(expenseValue);

    document.querySelector('.chart-container').appendChild(customLegendContainer);

    spendingChart.update();
});
