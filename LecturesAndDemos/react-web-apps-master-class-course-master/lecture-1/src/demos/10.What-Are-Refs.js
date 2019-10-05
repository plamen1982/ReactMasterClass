import React from 'react';

class FocusExample extends React.Component {
  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.value = this.inputRef.current.value + 'mine string';
    console.log(this.inputRef.current.value)
  }

  componentWillUpdate() {
    console.log(this.inputRef.current.value)
  }
  render() {
    return <input ref={this.inputRef} type="text" placeholder="Focus Here" />;
  }
}

export { FocusExample };
