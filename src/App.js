import React, { Component } from 'react';
import './App.css';
import { ListItem } from './components';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div id='horizontal-menu'>
          <div id='menu-title'>Scheduler</div>
        </div>

        <div className='content-window'>
          <div className='vertical-nav-bar'>
            <ListItem text={ 'Home' } />
            <ListItem text={ 'Schedules' } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
