import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from './components/TabPanel/TabPanel';
import StockPricesChart from './components/StockPricesChart/StockPricesChart';
import IncomeStatementTable from './components/IncomeStatementTable/IncomeStatementTable';
import BalanceSheetTable from './components/BalanceSheetTable/BalanceSheetTable';

const FinancialReport = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabSwitch = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <>
      <Tabs value={tabValue} onChange={handleTabSwitch}>
        <Tab label='Chart' />
        <Tab label='Income Statement' />
        <Tab label='Balance sheet' />
      </Tabs>
      <TabPanel index={0} value={tabValue}>
        <StockPricesChart />
      </TabPanel>
      <TabPanel index={1} value={tabValue}> 
        <IncomeStatementTable />
      </TabPanel>
      <TabPanel index={2} value={tabValue}>
        <BalanceSheetTable />
      </TabPanel>
    </>
  );
};

export default FinancialReport;