import { FETCH_FAILURE, FETCH_SUCCESS } from "./fetchTypes";

export const initialState = {
  loading: true,
  users: [],
  error: "",
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    case FETCH_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
      default: return state;
  }
};

export default fetchReducer;
