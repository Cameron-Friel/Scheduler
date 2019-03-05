import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';

class AppButton extends Component {
  render() {
    return (
      <div className='button-container' onClick={this.props.clickHandler}><p className='main-text button-text'>{ this.props.buttonName }</p></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps, { }) (AppButton);
