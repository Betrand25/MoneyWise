document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('spendingChart').getContext('2d');
    const spendingChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            datasets: [{
                label: 'Expenses',
                data: [490000, 110000, 200000, 800000, 50000, 200000, 20000],
                borderColor: '#FF0000',
                 backgroundColor: 'rgba(255, 0, 0, 0.2)',
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
    expenseValue.textContent = 'Rp 2.400.000';
    customLegendContainer.appendChild(expenseValue);

    document.querySelector('.chart-container').appendChild(customLegendContainer);

    spendingChart.update();
});
