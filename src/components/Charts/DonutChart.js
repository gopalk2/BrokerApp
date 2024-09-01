import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';
import './Charts.css';

const DonutChart = props => {
  const {
    data,
    showDataLabels = false,
    chartColors,
    chartHeight,
    className,
    titleStyles,
    title,
    donutSubTitle,
    showLegend = false,
    legendPosition,
    legendLabel,
    legendStyles,
    size,
    chartCenter
  } = props;

  const options = {
    chart: {
      type: 'pie',
      height: chartHeight
    },
    colors: chartColors,
    credits: {
      enabled: false
    },
    title: {
      text: title || null,
      align: 'center',
      floating: true,
      style: titleStyles || {
        fontSize: '1.25rem',
        color: '#002333'
      }
    },
    subtitle: donutSubTitle || null,
    plotOptions: {
      pie: {
        innerSize: '60%',
        dataLabels: {
          enabled: showDataLabels,
          format: '{point.y}',
          distance: -30,
          color: '#ffffff',
          style: {
            fontSize: '0.8rem',
            fontWeight: 'bold',
            textOutline: 'none'
          }
        },
        center: chartCenter || ['50%', '50%'],
        size: size || '100%',
        showInLegend: true
      }
    },
    tooltip: {
      useHTML: true,
      formatter: function () {
        return `<div style="text-align:center; font-weight:500;">${this.point.name}
        </br>${this.point.y}</div>`;
      },
      shared: true
    },
    series: [
      {
        name: 'Count',
        colorByPoint: true,
        data: data
      }
    ],
    legend: {
      enabled: showLegend,
      ...legendPosition,
      labelFormat: legendLabel || '{name}',
      floating: true,
      symbolHeight: 10, // Height of the legend symbol
      symbolWidth: 10,
      itemStyle: legendStyles || {
        color: '#434356',
        fontWeight: 'regular',
        fontSize: '0.7rem'
      }
    },
    accessibility: {
      enabled: true
    }
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      className={className}
    />
  );
};

export default DonutChart;
