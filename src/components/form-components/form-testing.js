import React, { Component } from 'react';
import TextInput from './text-input';
import TextArea from './text-area';
import Button from './button';

class FormTesting extends Component {
  onTextChange = ({value, name}) => {
    console.log('inside', value, name)
  }
  render() {
    let textAreValue = "Enter the textarea value";
    return (
      <div className="App1">
        <TextInput
          value=""
          name="testingInput"
          className="testing-input"
          labelName="testing one"
          onChange={this.onTextChange}
        />     
        <TextArea
          value={textAreValue}
          name="testingArea"
          className="testing-area"
          labelName="testing two"
          onChange={this.onTextChange}
        />
        <Button          
          name="subject"
          value="chk_btn"
          label="Click Me"
          onBtnClick={this.onTextChange}
        />
      </div>
    );
  }
}

export default FormTesting;
