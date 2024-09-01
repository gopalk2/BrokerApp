import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';

const MultipleColumnChart = ({
  data,
  title,
  horizontalLabels,
  verticalLabels,
  chartHeight,
  chartColors
}) => {
  const options = {
    chart: {
      type: 'column',
      height: chartHeight
    },
    colors: chartColors,
    credits: {
      enabled: false
    },
    plotOptions: {
      column: {
        borderRadius: 10,
        pointPadding: 0.3,
        groupPadding: 0.2,
        pointWidth: 8
      }
    },
    title: {
      text: title
    },
    xAxis: {
      categories: horizontalLabels,
      lineColor: '#DADADA',
      labels: {
        style: {
          color: '#696978',
          fontSize: '12px',
          fontWeight: 'regular'
        }
      }
    },
    yAxis: verticalLabels || [
      {
        title: {
          text: ''
        },
        labels: {
          style: {
            color: '#696978'
          }
        },
        gridLineWidth: 1,
        gridLineDashStyle: 'Dash'
      }
    ],
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'top',
      symbolHeight: 10,
      symbolWidth: 10,
      itemStyle: {
        fontSize: '12px',
        cursor: 'pointer'
      }
    },
    tooltip: {
      useHTML: true,
      formatter: function () {
        const tooltipContentHTML = data
          .map((series, i) => {
            const seriesValue = series.data[this.point.index];
            const seriesColor = chartColors[i];
            const seriesName = series.name;
            const dot = `<span style="color: ${seriesColor}; font-weight: bold; font-size:1rem;">●</span>`;
            return `<div style="font-size:0.7rem;">${dot} ${seriesName}: ${seriesValue}</div>`;
          })
          .join('');
        return `<div style="margin-bottom:0.25rem; font-weight: bold; font-size:0.8rem;">${this.x}</div>${tooltipContentHTML}`;
      },
      shared: true
    },
    series: data
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default MultipleColumnChart;
