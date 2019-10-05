import React from 'react';

class FocusExample extends React.Component {
  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.value = this.inputRef.current.value + 'mine string';
    console.log(this.inputRef.current.value)
  }

  componentWillUpdate() {
    //is called only when setState is called 
    console.log(`Sorry you do not have access to lyfecycle hooks you take care
    'by your self now good luck, handleOnChange is your way now`)
  }
  handleOnChange = (e) => {
    console.log(e.target.value)
  }
  render() {
    return <input onChange={this.handleOnChange} ref={this.inputRef} type="text" placeholder="Focus Here" />;
  }
}

export { FocusExample };
