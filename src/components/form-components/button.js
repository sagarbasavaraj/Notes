import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    value:  PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    name: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    onBtnClick: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  };

  triggerClickEvent = (event) => {
    const {target: {value}} = event;
    this.setState({value});

    if (this.props.onBtnClick && this.props.onBtnClick instanceof Function) {
      this.props.onBtnClick({value, name: this.props.name});
    }
  };
  
  render() {
    const modifiedClassName = `l-buttonn-wrapper ${this.state.className}`;
    return(
      <div className={modifiedClassName}>
        <button
          name={this.props.name}
          value={this.props.value}
          onClick={this.triggerClickEvent}
          >{this.props.label}</button>
      </div>      
    )
  };
};

export default Button;