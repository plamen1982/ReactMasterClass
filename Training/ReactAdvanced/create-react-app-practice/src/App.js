import React from 'react';
import styles from './App.module.css';

function App() {
  return (
    <>
      <div className={styles.error}>{process.env.REACT_APP_URL}</div>
      <div>Some content</div>
    </>
  );
}

export default App;
