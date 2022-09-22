import axios from 'axios';

//action types
export const GET_STUDENTS_DATA_REQUEST = 'GET_STUDENTS_DATA_REQUEST';
export const GET_STUDENTS_DATA_SUCCESS = 'GET_STUDENTS_DATA_SUCCESS';
export const GET_STUDENTS_DATA_ERROR = 'GET_STUDENTS_DATA_ERROR';

//actions
const getStudentsDataRequest = () => ({
  type: GET_STUDENTS_DATA_REQUEST,
});

const getStudentsDataSuccess = (payload) => ({
  type: GET_STUDENTS_DATA_SUCCESS,
  payload,
});

const getStudentsDataError = () => ({
  type: GET_STUDENTS_DATA_ERROR,
});

//getting Data;

export const getStudentsData = () => (dispach) => {
  dispach(getStudentsDataRequest());
  axios({
    url: `${process.env.REACT_APP_API}/studentsData`,
    method: 'GET',
  })
    .then((res) => dispach(getStudentsDataSuccess(res.data)))
    .catch((error) => dispach(getStudentsDataError()));
};
