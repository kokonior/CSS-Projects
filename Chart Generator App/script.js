var canvas = document.getElementById('myChart');
var ctx = canvas.getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: '',
            backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    animation: {
    tension: {
        duration: 1000,
        easing: 'easeInCubic',
        from: 1,
        to: 0,
        loop: true
    }
},
}
});
    
function addData(chart) {
  chart.data.labels.push(document.getElementById("label").value);
  chart.data.datasets.forEach((dataset) => {
  dataset.data.push(document.getElementById("data").value);
  });
  chart.update();
}

function removeData(chart) {
chart.data.labels.pop();
chart.data.datasets.forEach((dataset) => {
dataset.data.pop();
});
chart.update();
} 

function saveCanvas() {
    var image = canvas.toDataURL();  
    var tmpLink = document.createElement( 'a' );  
    tmpLink.download = 'my_chart.png';
    tmpLink.href = image;  
    document.body.appendChild( tmpLink );  
    tmpLink.click();  
    document.body.removeChild( tmpLink );  
}
