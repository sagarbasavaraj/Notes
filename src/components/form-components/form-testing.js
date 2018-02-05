import React, { Component } from 'react';
import TextInput from './text-input';

class FormTesting extends Component {
  onTextChange = ({value, name}) => {
    console.log('inside', value, name)
  }
  render() {
    return (
      <div className="App1">
        <TextInput
          value=""
          name="testingInput"
          className="testing-input"
          labelName="testing one"
          onChange={this.onTextChange}
        />
        <TextInput value=""/>
      </div>
    );
  }
}

export default FormTesting;
