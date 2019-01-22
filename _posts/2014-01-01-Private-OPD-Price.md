---
layout: post
title: 私立醫院門診收費一覽
desc: 香港各大私立醫院的門診收費，分別顯示日診及通宵夜診間的收費分別。
level: 第二級
img: pic01.jpg
categories: [醫療服務實況]
---
<script src="{{ "/assets/plugins/highcharts/plugin.js" | relative_url }}"></script>
<div id="highcharts"></div>

註：

1. 以上收費均以各醫院最新公布為準
2. 上列收費為基本門診收費，並未包含藥物、行政、或額外檢查所產生之費用。
3. 由於某部分醫院提供長者、醫療卡優惠，最終最低收費或會有不同。

<script>
require(['highcharts'], function(highcharts) { 
  var raw = {{ site.data.PRIVATEOPDPRICE | jsonify }};
  var options = {
      "chart": {
          "type": "columnrange",
          "inverted": true,
          "polar": false
      },
      exporting: { enabled: false },
      "plotOptions": {
          "series": {
              "animation": false,
              "minPointLength": 5,
              "lineWidth": 5,
              "dataLabels": {
                  "enabled": true,
                  "style": {
                      "color": "contrast",
                      "fontSize": "11px",
                      "fontWeight": "",
                      "textOutline": "1px 1px contrast"
                  }
              }
          }
      },
      "title": {
          "text": ""
      },
      "subtitle": {
          "text": ""
      },
      "exporting": {},
      "credits": {
          "enabled": false
      },
      "tooltip": {
          "shared": true
      },
      "data": {
        "rows": raw
      }
  };
  var chart = new Highcharts.Chart("highcharts", options);
  console.log(chart);
});
</script>
