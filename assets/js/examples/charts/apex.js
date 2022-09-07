var options1 = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight'
},
title: {
  text: 'Product Trends by Month',
  align: 'left'
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
}
};

var chart1 = new ApexCharts(document.querySelector("#apex_chart_one"), options1);
chart1.render();

var options2 = {
series: [{
name: 'Net Profit',
data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
}, {
name: 'Revenue',
data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
}, {
name: 'Free Cash Flow',
data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
}],
chart: {
type: 'bar',
height: 350
},
plotOptions: {
bar: {
horizontal: false,
columnWidth: '55%',
endingShape: 'rounded'
},
},
dataLabels: {
enabled: false
},
stroke: {
show: true,
width: 2,
colors: ['transparent']
},
xaxis: {
categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
},
yaxis: {
title: {
text: '$ (thousands)'
}
},
fill: {
opacity: 1
},
tooltip: {
y: {
formatter: function (val) {
    return "$ " + val + " thousands"
}
}
}
};

var chart2 = new ApexCharts(document.querySelector("#apex_chart_two"), options2);
chart2.render(); 

var options3 = {
  series: [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'series2',
  data: [11, 32, 45, 32, 34, 52, 41]
}],
  chart: {
  height: 350,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};

var chart3 = new ApexCharts(document.querySelector("#apex_chart_three"), options3);
chart3.render();

var options = {
  series: [{
  name: 'TEAM A',
  type: 'column',
  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
}, {
  name: 'TEAM B',
  type: 'area',
  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
}, {
  name: 'TEAM C',
  type: 'line',
  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
}],
  chart: {
  height: 350,
  type: 'line',
  stacked: false,
},
stroke: {
  width: [0, 2, 5],
  curve: 'smooth'
},
plotOptions: {
  bar: {
    columnWidth: '50%'
  }
},

fill: {
  opacity: [0.85, 0.25, 1],
  gradient: {
    inverseColors: false,
    shade: 'light',
    type: "vertical",
    opacityFrom: 0.85,
    opacityTo: 0.55,
    stops: [0, 100, 100, 100]
  }
},
labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
  '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
],
markers: {
  size: 0
},
xaxis: {
  type: 'datetime'
},
yaxis: {
  title: {
    text: 'Points',
  },
  min: 0
},
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if (typeof y !== "undefined") {
        return y.toFixed(0) + " points";
      }
      return y;

    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#apex_chart_four"), options);
chart.render();