import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useRef, useState, useEffect } from 'react';

const ColumnChart = props => {
  const chartContainerRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);
  const [chartHeight, setChartHeight] = useState(0);

  useEffect(() => {
    const chartContainer = chartContainerRef.current;
    if (chartContainer) {
      const width = chartContainer.getBoundingClientRect().width;
      const height = chartContainer.getBoundingClientRect().height;
      setChartHeight(height);
      setChartWidth(width);
    }
  }, []);

  const { ChartData, ChartLabel } = props;
  const options = {
    chart: {
      type: 'column',
      width: chartWidth,
      height: chartHeight,
      marginBottom: 35,
      marginRight: 0,
      marginLeft: 40,
      marginTop: 35
    },
    credits: {
      enabled: false
    },
    title: {
      text: '',
      floating: true
    },
    xAxis: {
      categories: ChartLabel,
      lineColor: '#9BB4CA',
      tickPosition: 'between',
      tickWidth: 1,
      tickLength: 8,
      tickColor: '#9BB4CA',
      alignTicks: true,
      tickmarkPlacement: 'between',
      startOnTick: true,
      tickmarkPlacement: 'on',
      labels: {
        style: {
          fontSize: '10'
        }
      }
    },
    colors: ['#52CCA3', '#FF9966'],
    yAxis: {
      title: {
        text: null
      },
      gridLineWidth: 0,
      visible: true,
      lineWidth: 1,
      lineColor: '#9BB4CA',
      tickPosition: 'between',
      tickWidth: 1,
      tickLength: 8,
      tickColor: '#9BB4CA',
      tickmarkPlacement: 'on',
      labels: {
        format: '{value}m',
        style: {
          fontSize: '10'
        }
      }
    },
    legend: {
      verticalAlign: 'top',
      floating: true,
      y: -15,
      symbolWidth: 12, // Set the width of the legend symbol
      symbolHeight: 12, // Set the height of the legend symbol
      symbolRadius: 0
    },
    series: ChartData
  };
  return (
    <div ref={chartContainerRef} style={{ width: '100%', height: '100%' }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ColumnChart;
