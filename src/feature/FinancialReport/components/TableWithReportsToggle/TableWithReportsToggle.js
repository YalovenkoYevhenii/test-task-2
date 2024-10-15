import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import addIds from '../../../../helpers/addIds';
import styles from './TableWithReportsToggle.module.css'

const TableWithReportsToggle = ({ requestData, loading, columns }) => {
  const [alignment, setAlignment] = useState("annualReports");

  const handleChangeReportType = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className={styles.tableContainer} >
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChangeReportType}
      >
        <ToggleButton value="annualReports">Annual Reports</ToggleButton>
        <ToggleButton value="quarterlyReports">Quarterly Reports</ToggleButton>
      </ToggleButtonGroup>
      <DataGrid
        rows={requestData ? addIds(requestData[alignment]) : []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        loading={loading}
      />
    </div>
  );
};

export default TableWithReportsToggle;