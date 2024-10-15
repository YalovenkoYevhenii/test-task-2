import React, { useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import LinearProgress from '@mui/material/LinearProgress';

import useRequest from '../../../../hooks/useRequest';
import { TIME_SERIES_DAILY_URL } from '../../../../constants/pathConstants';
import transformTimeSeriesData from '../../../../helpers/transformTimeSeriesData';
import getChartConfig from '../../../../helpers/getChartConfig';

const StockPricesChart = () => {
  const { requestData, setOptions, loading } = useRequest();

  useEffect(() => { 
    setOptions({url: TIME_SERIES_DAILY_URL});
  }, [])

  let chartOptions = {};
  if (requestData) {
    const formattedData = transformTimeSeriesData(requestData);
    chartOptions = getChartConfig(formattedData);
  }

  return (
    <div>
      {loading ? (
        <LinearProgress />
      ) : (
        <HighchartsReact style={{height: "600px"}} highcharts={Highcharts} constructorType={'stockChart'} options={chartOptions} />
      )}
    </div>
  );
};

export default StockPricesChart;