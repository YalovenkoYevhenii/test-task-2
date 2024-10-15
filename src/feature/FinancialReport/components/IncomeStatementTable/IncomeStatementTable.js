import React, { useEffect } from 'react';

import useRequest from '../../../../hooks/useRequest';
import { INCOME_STATEMENT_URL } from '../../../../constants/pathConstants';

import TableWithReportsToggle from '../TableWithReportsToggle/TableWithReportsToggle';
import { incomeStatementColumns } from '../../columnsConfig';

const IncomeStatementTable = () => {
  const { requestData, setOptions, loading } = useRequest();

  useEffect(() => { 
    setOptions({url: INCOME_STATEMENT_URL});
  }, [])

  return (
    <TableWithReportsToggle requestData={requestData} loading={loading} columns={incomeStatementColumns} />
  );
};

export default IncomeStatementTable;