import React, { Component } from 'react';
import '../App.css';

export default class ListItem extends Component {
  render() {
    return (
      <div className='list-item main-text'>{ this.props.text }</div>
    );
  }
}