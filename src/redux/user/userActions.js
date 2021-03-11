import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

//? we dispatch the appropiate actions :
export const fetchUsers = () => {
  //? recieves the dispach method as arguments
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // const users = response.data.map((user) => user.name);
        dispatch(fetchUsersSuccess(response.data));
        // dispatch({type:FETCH_USERS_SUCCESS,payload:response.data});
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
