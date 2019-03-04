import {
  TOKEN,
  USER_DATA,
  DIALOG_OPEN,
  ESCAPED,
  DIALOG_CLOSE,
  BACK_CLICK,
  GENRE_SELECTED,
  DANCE_SELECTED,
  ENERGY_SELECTED,
  LOUD_SELECTED,
  TEMPO_SELECTED,
  POS_SELECTED,
  RESET
} from './action_types';

export function onTokenReceived(token) {
  return function (dispatch) {
    dispatch({
        type: TOKEN,
        payload: token
    })
  }
};

export function getUserData(token) {
  return function (dispatch) {
    fetch("https://api.spotify.com/v1/me", {
      headers: {'Authorization': "Bearer " + token}
    })
    .then(response => response.json())
    .then(function(userData) {
      dispatch({
          type: USER_DATA,
          payload_name: userData.display_name,
          payload_id: userData.id
      });
    })
    .catch(error => console.error('Error:', error));
  }
};

export function onDialogOpen() {
  return function (dispatch) {
    dispatch({
        type: DIALOG_OPEN,
        payload: true
    })
  }
};

export function onEscape () {
  return function (dispatch, getState) {
    dispatch({
      type: ESCAPED,
      payload: false,
    })
  }
};

export function onDialogClose() {
  return function (dispatch) {
    dispatch({
        type: DIALOG_CLOSE,
        payload: false,
        stepPayload: 1
    })
  }
};

export function onBackClick() {
  return function (dispatch) {
    dispatch({
        type: BACK_CLICK,
        payload: 1
    })
  }
};

export function handleGenreSelection(value) {
  return function (dispatch) {
    dispatch({
        type: GENRE_SELECTED,
        payload: value
    })
  }
};


export function handleDanceabilitySelection(value) {
  return function (dispatch) {
    dispatch({
        type: DANCE_SELECTED,
        payload: value
    })
  }
};

export function handleEnergySelection(value) {
  return function (dispatch) {
    dispatch({
        type: ENERGY_SELECTED,
        payload: value
    })
  }
};

export function handleLoudnessSelection(value) {
  return function (dispatch) {
    dispatch({
        type: LOUD_SELECTED,
        payload: value
    })
  }
};

export function handleTempoSelection(value) {
  return function (dispatch) {
    dispatch({
        type: TEMPO_SELECTED,
        payload: value
    })
  }
};

export function handlePositivenessSelection(value) {
  return function (dispatch) {
    dispatch({
        type: POS_SELECTED,
        payload: value
    })
  }
};

export function onStepsReset() {
  return function (dispatch) {
    dispatch({
        type: RESET,
        payload: 0
    })
  }
};
