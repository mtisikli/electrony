import {
  CHARGING,
  NO_RETURN,
  PLAYLIST_FAILURE,
  FETCH_SUCCESS,
  PLAYLIST_SUCCESS,
  DETAILS_BOX_OPEN,
  NAME_CHANGED,
  DESCRIPTION_CHANGED,
  CHECK_BOX,
  ESCAPED,
  DETAILS_BOX_CLOSE,
  UPLOADING,
  USER_INFO,
  FINAL_DETAILS,
  PLAYLIST_INFO,
  UPLOAD_FAILURE,
  PLAYLIST_CREATED,
  PLAYLIST_RESET
  } from '../actions/playlist_actions/action_types';

const initialState = {
  playlist_charging: false,
  playlist_charging_content: {
    title: "Finding Your Tune...",
    content: "Just a second!"
  },
  no_return: false,
  no_return_content: {
    title: "Oh no!",
    content: "It seems we couldn't find anything matching your choices!"
  },
  playlist_failure: false,
  playlist_failure_content: {
    title: "Ups!",
    content: "Sorry, there has been a server problem. Please try again."
  },
  tracks: [],
  playlist_success: false,
  details_box: false,
  playlist_name: "",
  playlist_description: "",
  check_box_state: false,
  uploading: false,
  uploading_content: {
    title: "Creating Your Playlist on Spotify...",
    content: "This might take a few seconds!"
  },
  uploading_failure: false,
  uploading_failure_content: {
    title: "Something went wrong!",
    content: "Sorry, there has been a problem. Please try again."
  },
  user_name: "",
  user_id: '',
  playlist_id : '',
  playlist_uri: '',
  playlist_created: false
};

function PlaylistReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) {
    case CHARGING: {
      const newState = Object.assign({}, state);
      newState.playlist_charging = action.payload
      return newState;
    }
    case NO_RETURN: {
      const newState = Object.assign({}, state);
      newState.no_return = action.payload
      return newState;
    }
    case PLAYLIST_FAILURE: {
      const newState = Object.assign({}, state);
      newState.playlist_failure = action.payload
      return newState;
    }
    case FETCH_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.tracks = action.payload
      return newState;
    }
    case PLAYLIST_SUCCESS: {
      const newState = Object.assign({}, state);
      newState.playlist_success = action.payload;
      return newState;
    }
    case DETAILS_BOX_OPEN: {
      const newState = Object.assign({}, state);
      newState.details_box = action.payload;
      return newState;
    }
    case NAME_CHANGED: {
      const newState = Object.assign({}, state);
      newState.playlist_name = action.payload
      return newState;
    }
    case DESCRIPTION_CHANGED: {
      const newState = Object.assign({}, state);
      newState.playlist_description = action.payload
      return newState;
    }
    case CHECK_BOX: {
      const newState = Object.assign({}, state);
      newState.check_box_state = action.payload
      return newState;
    }
    case ESCAPED: {
      const newState = Object.assign({}, state);
      newState.details_box = action.payload;
      return newState;
    }
    case DETAILS_BOX_CLOSE: {
      const newState = Object.assign({}, state);
      newState.details_box = action.payload
      return newState;
    }
    case UPLOADING: {
      const newState = Object.assign({}, state);
      newState.uploading = action.payload
      return newState;
    }
    case USER_INFO: {
      const newState = Object.assign({}, state);
      newState.user_name = action.payload
      newState.user_id = action.payload_id
      return newState;
    }
    case FINAL_DETAILS: {
      const newState = Object.assign({}, state);
      newState.playlist_name = action.payload
      newState.playlist_description = action.payload_des
      return newState;
    }
    case PLAYLIST_INFO: {
      const newState = Object.assign({}, state);
      newState.playlist_id = action.payload
      newState.playlist_uri = action.playlist_uri
      return newState;
    }
    case UPLOAD_FAILURE: {
      const newState = Object.assign({}, state);
      newState.uploading_failure = action.payload
      return newState;
    }
    case PLAYLIST_CREATED: {
      const newState = Object.assign({}, state);
      newState.playlist_created = action.payload
      return newState;
    }
    case PLAYLIST_RESET: {
      return initialState;
    }
    default:
      return state;
  }
}

export default PlaylistReducer;
