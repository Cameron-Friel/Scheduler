import Home from '../pages/Home';

const INITIAL_STATE = {view: Home, modalFocus: false};

const AppReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_VIEW':
      return {
        ...state,
        view: action.payload,
      };
    case 'SET_MODAL_FOCUS':
      return {
        ...state,
        modalFocus: action.payload,
      };
    default:
      return state;
  }
}

export default AppReducer;
