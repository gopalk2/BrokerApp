import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';

const StackedBarChart = props => {
  const {
    data,
    chartColors,
    verticalLabels,
    chartHeight,
    chartWidth,
    dataEnabled
  } = props;

  const options = {
    chart: {
      type: 'bar',
      width: chartWidth || null,
      height: chartHeight
    },
    colors: chartColors,
    credits: {
      enabled: false
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: verticalLabels,
      labels: {
        style: {
          color: '#696978'
        }
      },
      lineWidth: 0,
      tickWidth: 0,
      gridLineWidth: 0
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      },
      lineWidth: 0,
      tickWidth: 0,
      gridLineWidth: 0,
      labels: {
        enabled: false
      }
    },
    legend: {
      reversed: true,
      enabled: false
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        borderRadius: 10,
        pointWidth: 15,
        dataLabels: {
          enabled: dataEnabled,
          align: 'center',
          color: '#ffffff',
          style: {
            fontSize: '0.6rem',
            fontWeight: 'bold',
            textOutline: 'none'
          },
          y: -2,
          formatter: function () {
            return this.y;
          }
        }
      }
    },
    tooltip: {
      useHTML: true,
      formatter: function () {
        let total = 0;
        const tooltipContentHTML = data
          .map((series, i) => {
            const seriesValue = series.data[this.point.index];
            const seriesColor = chartColors[i];
            const seriesName = series.name;
            const dot = `<span style="color: ${seriesColor}; font-weight: bold;">●</span>`;
            total += seriesValue;
            return `<div style="margin-bottom:0.4rem; display: flex; justify-content:space-between;">
            <span style="margin-right:0.4rem;">${dot} ${seriesName}</span>
            <span>${seriesValue}</span>
            </div>`;
          })
          .join('');
        return `<div style="margin-bottom:0.75rem; display: flex; justify-content:space-between;">
        <span>${this.x}</span>
        <span>${total}</span>
        </div>${tooltipContentHTML}`;
      },
      shared: true
    },
    series: data
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default StackedBarChart;
