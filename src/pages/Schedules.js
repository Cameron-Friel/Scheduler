import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { setModalFocus } from '../actions';
import { AppButton, Modal } from '../components';

class Schedules extends Component {
  /**
    * Opens a modal in the current view to add a new schedule
  **/

  openAddEntryModal = () => {
    this.props.setModalFocus(true);
  }

  render() {
    return (
      <div className='content-container'>
        <div>Schedule Page</div>
        <AppButton buttonName='Add Entry' clickHandler={this.openAddEntryModal.bind(this)}></AppButton>

        <Modal
          header={'Add Entry'}
          subHeader={'Enter a title and hit create to make a new task schedule.'}
          inputTitle={'Task Title'}
          inputPlaceholder={'Title'}>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modalFocus: state.AppReducer.modalFocus,
  };
};

export default connect(mapStateToProps, { setModalFocus }) (Schedules);
