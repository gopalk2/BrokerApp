import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';
import './Charts.css';

const LineChart = props => {
  const { data, horizontalLabels, title, tooltipContent, colors, chartHeight } =
    props;
  const options = {
    chart: {
      type: 'line',
      height: chartHeight,
      backgroundColor: 'transparent'
    },
    credits: {
      enabled: false
    },
    title: {
      text: title
    },
    xAxis: {
      categories: horizontalLabels,
      labels: {
        style: {
          color: '#696978'
        }
      },
      lineColor: '#DADADA'
    },
    yAxis: {
      title: {
        text: title
      },
      labels: {
        style: {
          color: '#696978'
        }
      },
      gridLineWidth: 1,
      gridLineDashStyle: 'Dash'
    },
    legend: {
      enabled: false
    },
    tooltip: tooltipContent,
    series: data.map((series, index) => ({
      ...series,
      color: colors[index]
    }))
  };

  return (
    <div style={{ height: '100%' }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineChart;
