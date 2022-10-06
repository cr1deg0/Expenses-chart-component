function createAriaLabel(labels, amounts) {
    let text = '';
    for (let i=0; i < labels.length; i++) {
        console.log(labels[i]);
        switch (labels[i]) {    
            case 'mon': 
                text += `Monday $${amounts[i]}, `;
                break;
            case 'tue': 
                text += `Tuesday $${amounts[i]}, `;
                break;
            case 'wed': 
                text += `Wedensday $${amounts[i]}, `;
                break;
            case 'thu': 
                text += `Thursday $${amounts[i]}, `;
                break;
            case 'fri': 
                text += `Friday $${amounts[i]}, `;
                break;
            case 'sat': 
                text += `Saturday $${amounts[i]}, `;
                break;
            case 'sun': 
                text += `Sunday $${amounts[i]}, `;
                break;
        }
    }
    return text.slice(0, -2);
}

function renderChart(data) {

    const chartElement = document.getElementById("weeklyChart");
    const labels = data.map(item => item.day);
    const amounts = data.map(item => item.amount);

    chartElement.ariaLabel = createAriaLabel(labels, amounts);

    function calculateColors(context, solid) {
        const date = new Date();
        const day = date.getDay();

        const opacity = solid ? 1 : 0.6;
      
        return context.dataIndex === (day - 1) 
            ? `hsla(186, 34%, 60%,${opacity})`
            : `hsl(10, 79%, 65%,${opacity})`;
    }

    const chartData = {
        labels: labels,
        datasets: [{
            backgroundColor: 'hsl(10, 79%, 65%)',
            barThickness: (context) => {        
                                const fontSize = context.chart.width < 300 
                                    ? '28'
                                    : '45';
                                return fontSize;
                            },
            borderSkipped: false,
            borderRadius: 4,
            data: amounts,
            backgroundColor: context => calculateColors(context, true),
            hoverBackgroundColor: context => calculateColors(context,false),
        }]
    }

    const chartConfig = {
        type: 'bar',
        data: chartData,
        options: {
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    backgroundColor: 'hsl(25, 47%, 15%)',
                    displayColors: false,
                    xAlign: 'center',
                    yAlign: 'bottom',
                    caretSize: 0,
                    caretPadding: 8,
                    bodyFont: {
                        size: (context) => {
                            const fontSize = context.chart.width < 300 
                                ? '11'
                                : '16';
                            return fontSize;
                        }
                    },
                    callbacks: {
                        title: function() {},
                        label: function(context) {
                            if (context.raw) {
                                return '$ ' + context.raw;
                            }
                        }
                    }
                }
                
            },
            onHover: (event, chartElement) => {
                chartElement.length === 1 
                    ? event.native.target.style.cursor = 'pointer'
                    : event.native.target.style.cursor = 'default';
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                        borderColor: 'white',

                    },
                    ticks: {
                        font: {
                            size: (context) => {
                                const fontSize = context.chart.width < 300 
                                    ? '11'
                                    : '16';
                                return fontSize;
                            },
                        }
                    }
                },
                y: {
                    display: false,
                    max: 70,
                    ticks: {
                        stepSize: 50,
                    }
                }
            }
        }
    }
    const weeklyChart = new Chart(chartElement, chartConfig);
}


async function getData () {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
}

getData().then(data => renderChart(data)).catch(err => console.log(err));


