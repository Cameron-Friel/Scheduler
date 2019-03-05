import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { setModalFocus, setModalInputText } from '../actions';
import { AppButton } from './index.js';

class Modal extends Component {
  /**
    * Closes the add entry modal in the current view
  **/

  closeModal = () => {
    this.props.setModalFocus(false);
    this.props.setModalInputText('');
  }

  /**
    * Updates the state of the modalInputText
    * @param {string} text - the input text
  **/

  modalInputTextChanged = (text) => {
    this.props.setModalInputText(text.target.value);
  }

  render() {
    return (
      <div className={this.props.modalFocus ? 'modal-container' : 'hidden-modal-container'}>
        <div className='modal'>
          <div className='main-text modal-header-text'>{this.props.header}</div>
          <div className='main-text modal-sub-header-text'>{this.props.subHeader}</div>

          <label className='main-text modal-sub-header-text'>{this.props.inputTitle}</label>
          <input type='text' name={this.props.inputPlaceholder} onChange={this.modalInputTextChanged.bind(this)} value={this.props.modalInputText} placeholder={this.props.inputPlaceholder}></input>

          <div className='list'>
            <AppButton buttonName='Close' clickHandler={() => this.closeModal()}></AppButton>
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
    modalInputText: state.AppReducer.modalInputText,
  };
};

export default connect(mapStateToProps, { setModalFocus, setModalInputText }) (Modal);
