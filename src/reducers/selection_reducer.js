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
} from '../actions/selection_actions/action_types';

const initialState = {
  select: {
    activeStep: 0,
    dialogOpen: false
  },
  user_selection: {
    genre: '',
    danceability: '',
    energy: '',
    loudness: '',
    tempo: '',
    positiveness: ''
  },
  titles: {
    genre: "Select the genre that best describes what you are looking for",
    danceability: "Do you feel like taking the floor and dancing?",
    energy: "How energetic would you like your playlist to be?",
    loudness: "There is no shame in wishing for some serenity!",
    tempo: "Some people prefer it slow. What is your choice?",
    positiveness: "Are you in a euphoric mood or kind of sad?",
  },
  user_data: {
    user_token: '',
    user_name: '',
    user_id: ''
  }
};

function SelectionReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) {
    case TOKEN: {
      const newState = Object.assign({}, state);
      newState.user_data.user_token = action.payload
      return newState;
    }
    case USER_DATA: {
      const newState = Object.assign({}, state);
      newState.user_data.user_name = action.payload_name
      newState.user_data.user_id = action.payload_id
      return newState;
    }
    case DIALOG_OPEN: {
      const newState = Object.assign({}, state);
      newState.select.dialogOpen = action.payload
      return newState;
    }
    case ESCAPED: {
      const newState = Object.assign({}, state);
      newState.select.dialogOpen = action.payload;
      return newState;
    }
    case DIALOG_CLOSE: {
      const newState = Object.assign({}, state);
      newState.select.dialogOpen = action.payload;
      newState.select.activeStep = state.select.activeStep + action.stepPayload
      return newState;
    }
    case BACK_CLICK: {
      const newState = Object.assign({}, state);
      newState.select.activeStep = state.select.activeStep - action.payload
      return newState;
    }
    case GENRE_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.genre = action.payload;
      return newState;
    }
    case DANCE_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.danceability = action.payload;
      return newState;
    }
    case ENERGY_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.energy = action.payload;
      return newState;
    }
    case LOUD_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.loudness = action.payload;
      return newState;
    }
    case TEMPO_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.tempo = action.payload;
      return newState;
    }
    case POS_SELECTED: {
      const newState = Object.assign({}, state);
      newState.user_selection.positiveness = action.payload;
      return newState;
    }
    case RESET: {
      const newState = Object.assign({}, state);
      newState.select.activeStep = action.payload
      return newState;
    }
    default:
      return state;
  }
};

export default SelectionReducer;
