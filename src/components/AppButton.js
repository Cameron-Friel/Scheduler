import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { updateView } from '../actions';

class AppButton extends Component {
  /**
    * Checks if a view in the app is already in use or not
    * @param {string} newView - The view the user wishes to see
    * @returns {boolean}
  **/

  isDuplicateView = (newView) => {
    if (this.props.view === newView) {
      return true;
    }
    return false;
  }

  /**
    * Updates the view the user is seeing based on the list item they clicked
    * @param {string} view - The view the user wishes to see
  **/

  updateView = (newView) => {
    if (!this.isDuplicateView(newView)) {
      this.props.updateView(newView);
    }
  }

  render() {
    return (
      <div className='button-container' onClick={this.props.clickHandler}><p className='main-text button-text'>{ this.props.buttonName }</p></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.AppReducer.view,
  };
};

export default connect(mapStateToProps, { updateView }) (AppButton);
