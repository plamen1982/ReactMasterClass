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

const Button = ({color}) => {
  return(
    <button>This is a {color} Button</button>
  );
} 

const BlackButton = () => {
  const color = 'Brown'
  return (
    <Button color={color}/>
  );

}
export default App;
