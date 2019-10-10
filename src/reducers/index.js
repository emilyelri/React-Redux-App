import {
  FETCH_DOGS_START,
  FETCH_DOGS_SUCCESS,
  FETCH_DOGS_FAIL
} from "../actions/";

const initialState = {
  data: [],
  isFetching: false,
  error: ""
};

const dogReducer = (state = initialState, action) => {
  console.log("Reducer fired: ", action);
  switch (action.type) {
    case FETCH_DOGS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_DOGS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_DOGS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default dogReducer;
