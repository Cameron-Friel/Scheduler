import Home from '../pages/Home';

const INITIAL_STATE = {view: Home};

const AppReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_VIEW':
      return {
        ...state,
        view: action.payload,
      };
    default:
      return state;
  }
}

export default AppReducer;
