import React, { useEffect } from 'react';
import TableWithReportsToggle from '../TableWithReportsToggle/TableWithReportsToggle';
import useRequest from '../../../../hooks/useRequest';
import { BALANCE_SHEET_URL } from '../../../../constants/pathConstants';
import { balanceSheetColumns } from '../../columnsConfig';

const BalanceSheetTable = () => {
  const {requestData, setOptions, loading} = useRequest();

  useEffect(() => { 
    setOptions({url: BALANCE_SHEET_URL})
  }, [])

  return (
    <TableWithReportsToggle requestData={requestData} loading={loading} columns={balanceSheetColumns} />
  );
};

export default BalanceSheetTable;