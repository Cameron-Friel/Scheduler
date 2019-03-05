import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { setModalFocus } from '../actions';
import { AppButton } from './index.js';

class Modal extends Component {
  /**
    * Closes the add entry modal in the current view
  **/

  closeAddEntryModal = () => {
    this.props.setModalFocus(false);
  }

  render() {
    return (
      <div className={this.props.modalFocus ? 'modal-container' : 'hidden-modal-container'}>
        <div className='modal'>
          <div className='main-text modal-header-text'>{this.props.header}</div>
          <div className='main-text modal-sub-header-text'>{this.props.subHeader}</div>

          <label className='main-text modal-sub-header-text'>{this.props.inputTitle}</label>
          <input type='text' name={this.props.inputPlaceholder} placeholder={this.props.inputPlaceholder}></input>

          <div className='list'>
            <AppButton buttonName='Close' clickHandler={() => this.closeAddEntryModal()}></AppButton>
            <AppButton buttonName='Submit'></AppButton>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modalFocus: state.AppReducer.modalFocus,
  };
};

export default connect(mapStateToProps, { setModalFocus }) (Modal);
