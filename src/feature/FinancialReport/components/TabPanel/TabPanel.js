import React from 'react';
import styles from './TabPanel.module.css';

function TabPanel({ children, value, index }) {

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      className={styles.tabPanel}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

export default TabPanel;