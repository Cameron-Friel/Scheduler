export const UPDATE_VIEW='UPDATE_VIEW';
export const SET_MODAL_FOCUS='SET_MODAL_FOCUS';
export const SET_MODAL_INPUT_TEXT='SET_MODAL_INPUT_TEXT';

export const updateView = (view) => ({
  type: UPDATE_VIEW,
  payload: view,
});

export const setModalFocus = (bool) => ({
  type: SET_MODAL_FOCUS,
  payload: bool,
});

export const setModalInputText = (text) => ({
  type: SET_MODAL_INPUT_TEXT,
  payload: text,
});
