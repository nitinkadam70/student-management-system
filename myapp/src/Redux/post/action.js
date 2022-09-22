import axios from 'axios';
//action types
export const ADD_STUDENTS_DATA_REQUEST = 'ADD_STUDENTS_DATA_REQUEST';
export const ADD_STUDENTS_DATA_SUCCESS = 'ADD_STUDENTS_DATA_SUCCESS';
export const ADD_STUDENTS_DATA_ERROR = 'ADD_STUDENTS_DATA_ERROR';

//actions
const addStudentsDataRequest = () => ({
  type: ADD_STUDENTS_DATA_REQUEST,
});

const addStudentsDataSuccess = (payload) => ({
  type: ADD_STUDENTS_DATA_SUCCESS,
  payload,
});

const addStudentsDataError = (payload) => ({
  type: ADD_STUDENTS_DATA_ERROR,
  payload,
});

//posting Data;

export const addStudentsData = (payload) => (dispach) => {
  dispach(addStudentsDataRequest());
  axios({
    url: `${process.env.REACT_APP_API}/studentsData`,
    method: 'POST',
    data: payload,
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) =>
      dispach(
        addStudentsDataSuccess({
          status: true,
          message: 'Data Add Successfully',
        })
      )
    )
    .catch((error) =>
      dispach(
        addStudentsDataError({
          status: false,
          message: 'Something went wrong while adding Data',
        })
      )
    );
};
