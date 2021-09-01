import { FETCH_FAILURE, FETCH_SUCCESS } from "./fetchTypes";

export const fetchSuccess = (users) => {
  return {
    type: FETCH_SUCCESS,
    payload: users,
  };
};

export const fetchFailure = (error) => {
    return {
      type: FETCH_FAILURE,
      payload: error,
    };
  };
  