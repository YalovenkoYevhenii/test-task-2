const getChartConfig = (formattedData) => { 
  return {
    chart: {
      type: 'candlestick',
      backgroundColor: '#f0f0f0',
      height: 600,
    },
    title: {
      text: 'Stock Prices Chart',
      style: {
        color: '#333333',
        fontWeight: 'bold',
        fontSize: '18px',
      },
    },
    xAxis: {
      type: 'datetime',
      labels: {
        format: '{value:%e %b %Y}',
      },
    },
    yAxis: {
      title: {
        text: 'Stock Price',
      },
      opposite: false,
    },
    series: [
      {
        type: 'candlestick',
        name: 'Stock Prices',
        data: formattedData,
        color: '#FF0000', 
        upColor: '#008000', 
      },
    ],
    tooltip: {
      split: true,
      valueDecimals: 2,
    },
  };
};

export default getChartConfig;