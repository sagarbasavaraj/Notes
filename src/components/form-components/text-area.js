import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  static propTypes = {
    value:  PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    name: PropTypes.string,
    className: PropTypes.string,
    labelName: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  };

  triggerChangeEvent = (event) => {
    const {target: {value}} = event;
    this.setState({value});

    if (this.props.onChange && this.props.onChange instanceof Function) {
      this.props.onChange({value, name: this.props.name});
    }
  };

  triggerBlurEvent = (event) => {
    const {target: {value}} = event;
    this.setState({value});

    if (this.props.onBlur && this.props.onBlur instanceof Function) {
      this.props.onBlur({value, name: this.props.name});
    }
  };

  createTextInput = () => {
    return(
      <textarea
        rows="4"
        cols="50"
        className="l-text-area"
        onChange={this.triggerChangeEvent}
        onBlur={this.triggerBlurEvent}
      >
        {this.state.value}
      </textarea>
    );
  };

  createLabel = () => {
    if(this.props.labelName) {
      return (
        <div className="l-label">
          <label>{this.props.labelName}</label>
        </div>
      );
    }
    return;
  };

  render() {
    const modifiedClassName = `l-text-area-wrapper ${this.state.className}`;
    return(
      <div className={modifiedClassName}>
        {this.createLabel()}
        {this.createTextInput()}
      </div>      
    )
  };
};

export default TextArea;