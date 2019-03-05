import React, { Component } from 'react';
import '../App.css';
import { AppButton } from '../components';

class Schedules extends Component {
  /**
    * Opens a modal in the current view to add a new schedule
  **/

  openAddEntryModal = () => {

  }

  /**
    * Closes the add entry modal in the current view
  **/

  closeAddEntryModal = () => {

  }

  render() {
    return (
      <div className='container'>
        <div className='content-container'>
          <div>Schedule Page</div>
          <AppButton buttonName='Add Entry' clickHandler={this.openAddEntryModal.bind(this)}></AppButton>
        </div>  
      </div>
    );
  }
}

export default Schedules;
