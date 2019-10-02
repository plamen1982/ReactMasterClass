import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrownButton />
      {customElement}
    </div>
  );
}
const name = 'pax';

const customElement = React.createElement('div', { className: 'custom-input'}, 'Some content ', name)

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
