import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { ListItem } from './components';
import { Home, Schedules } from './pages';

class App extends Component {
  /**
    * Renders the current view of the desktop app
  **/

  renderView = () => {
    return (
      <this.props.view />
    );
  }

  render() {
    return (
      <div className='container'>
        <div id='horizontal-menu'>
          <div id='menu-title'>Scheduler</div>
        </div>

        <div className='content-window'>
          <div className='vertical-nav-bar'>
            <ListItem text={ 'Home' } newView={ Home } />
            <ListItem text={ 'Schedules' } newView={ Schedules } />
          </div>

          { this.renderView() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.AppReducer.view,
  };
};

export default connect(mapStateToProps, {}) (App);
