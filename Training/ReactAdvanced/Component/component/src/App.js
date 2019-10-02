import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BlackButton />
    </div>
  );
}

const Button = ({color, children}) => {
  const innerVariable = 'I am invisible for outside world'
  return(
    <>
        <button>This is a {color} Button</button>
        {children}
        {innerVariable}
    </>
  );
} 

const BlackButton = () => {
  const color = 'Brown'
  return (
    <Button color={color}>
      <div>Some children content</div>
    </Button>
  );

}
export default App;
