import {
  ADD_STUDENTS_DATA_ERROR,
  ADD_STUDENTS_DATA_REQUEST,
  ADD_STUDENTS_DATA_SUCCESS,
} from './action';

let initState = {
  loading: false,
  msg: [],
  error: false,
};

export const addDataReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_STUDENTS_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_STUDENTS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload,
      };
    case ADD_STUDENTS_DATA_ERROR:
      return {
        ...state,
        loading: false,
        msg: [],
        error: true,
      };
    default:
      return state;
  }
};
