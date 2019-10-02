import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrownButton />
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

const BrownButton = () => {
  const color = 'Brown'
  return (
    <Button color={color}>
      <div>Some children content</div>
    </Button>
  );

}
export default App;
