---
layout: post
title: 急症傳染病症狀監測
desc: 以急診室求診的主要病徵為依據，追蹤市內各種傳染病症的流行程度。
categories: ['公共衛生實況']
img: pic01.jpg
level: 第一級
---
<script src="{{ "/assets/plugins/sheetrock/plugin.js" | relative_url }}"></script>
<script src="{{ "/assets/plugins/chart-js/plugin.js" | relative_url }}"></script>

<div class="chart-container" style="position: relative; height:600px;">
    <canvas id="chart" height="600" width="600"></canvas>
</div>

<table id="statistics" class="table table-condensed table-striped"></table>
  
<script>  //update chart

require(['chart-js', 'sheetrock', 'moment'], function(chart, sheetrock, moment) {
  
var flu = [];
var hfmd = [];
var ge = [];
var conjunctivitis = [];
var labels = [];
var chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};
var ctx = document.getElementById("chart").getContext("2d");
var cfg = {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: "Influenza-like Illness Syndrome",
            data: [],
            type: 'line',
            pointRadius: 0,
            fill: false,
            lineTension: 0,
            borderWidth: 2,

            backgroundColor: chartColors.blue,
            borderColor: chartColors.blue,
        }, {
            label: "Hand Foot and Mouth Disease Syndrome",
            data: [],
            type: 'line',
            pointRadius: 0,
            fill: false,
            lineTension: 0,
            borderWidth: 2
        }, {
            label: "Acute Gastroenteritis Syndrome",
            data: [],
            type: 'line',
            pointRadius: 0,
            fill: false,
            lineTension: 0,
            borderWidth: 2,

            backgroundColor: chartColors.red,
            borderColor: chartColors.red,
        }, {
            label: "Acute Conjunctivitis Syndrome",
            data: [],
            type: 'line',
            pointRadius: 0,
            fill: false,
            lineTension: 0,
            borderWidth: 5,

            backgroundColor: chartColors.green,
            borderColor: chartColors.green,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: '急症科傳染病症狀監測 \n Accident and Emergency Departments Communicable Diseases Syndromic Surveillance'
        },
        scales: {
            xAxes: [{
                type: 'time',
                distribution: 'series',
                time: {
                    parser: function (dateString) { return moment(dateString, 'DD-MMM-YYYY', 'en'); }
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Weekly Average Rate'
                }
            }]
        }
    }
};
  var chart = new Chart(ctx, cfg);
  
  function updateChart(rows) {
      if (!rows) {
          return;
      }
      for (var i = 2; i < rows.length; i++) {
          labels.push(rows[i][3]);
          flu.push(rows[i][4]);
          hfmd.push(rows[i][5]);
          ge.push(rows[i][6]);
          conjunctivitis.push(rows[i][7]);
      }
      chart.config.data.datasets[0].data = flu;
      chart.config.data.datasets[1].data = hfmd;
      chart.config.data.datasets[2].data = ge;
      chart.config.data.datasets[3].data = conjunctivitis;
      chart.config.data.labels = labels;
      console.log(chart.config.data);
      chart.update();
  }
  updateChart({{ site.data.AEDSURVEILLANCE | jsonify }});
  
});
</script>
