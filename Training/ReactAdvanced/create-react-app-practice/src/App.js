import React from 'react';
import styles from './App.module.css';

function App() {
  const Component = () => {
    return <div>Content</div>
  }
  return (
    <>
      <div className={styles.error}>{process.env.REACT_APP_URL}</div>
      <div>Some content</div>
      <Component />
    </>
  );
}

export default App;
