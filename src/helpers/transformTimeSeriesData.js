const transformTimeSeriesData = (rawData) => {
  const dailyData = rawData["Time Series (Daily)"];
  return Object.keys(dailyData).map((date) => {
    const dayData = dailyData[date];
    return [
      new Date(date).getTime(),
      parseFloat(dayData["1. open"]),
      parseFloat(dayData["2. high"]),
      parseFloat(dayData["3. low"]),
      parseFloat(dayData["4. close"])
    ];
  }).reverse(); 
};

export default transformTimeSeriesData;