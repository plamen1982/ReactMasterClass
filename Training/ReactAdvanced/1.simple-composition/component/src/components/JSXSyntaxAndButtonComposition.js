import React from 'react';

const name = 'pax';
//This code is processed by babel
const customElemtnWithinJSXSyntax = <div className="element">Some content {name}</div>
//and this is the output after babel 
const customElement = React.createElement('div', { className: 'custom-input'}, 'Some content ', name)
//in the Virtual DOM this React element is only a plain object => { type: 'div', props: { className: 'element', children: 'Some content pax' } }
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
      {customElemtnWithinJSXSyntax}
      {customElement}
    </Button>
  );

}
export default BrownButton;
