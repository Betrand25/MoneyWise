document.addEventListener('DOMContentLoaded', (event) => {
    const ctx1 = document.getElementById('spendingChart').getContext('2d');
    const spendingChart1 = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            datasets: [{
                label: 'Expenses',
                data: [1500000, 0, 0, 0, 500000, 0, 500000],
                // backgroundColor: '#3A66D8',
                borderColor: '#EF42C9',
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
    const customLegendContainer1 = document.createElement('div');
    customLegendContainer1.style.position = 'absolute';
    customLegendContainer1.style.top = '10px';
    customLegendContainer1.style.right = '10px';
    customLegendContainer1.style.color = 'white';
    customLegendContainer1.style.fontSize = '16px';
    customLegendContainer1.style.textAlign = 'right';

    const expenseLabel1 = document.createElement('div');
    expenseLabel1.textContent = 'Income';
    expenseLabel1.style.color = '#2ecc71'; 
    customLegendContainer1.appendChild(expenseLabel1);

    const expenseValue1 = document.createElement('div');
    expenseValue1.textContent = 'Rp 3.500.000';
    customLegendContainer1.appendChild(expenseValue1);

    document.querySelector('.chart-container').appendChild(customLegendContainer1);

    spendingChart1.update();
});
