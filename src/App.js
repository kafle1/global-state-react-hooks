import axios from "axios";
import React, { useReducer, useEffect } from "react";

import "./App.css";
import Users from "./components/Users.jsx";
import { fetchFailure, fetchSuccess } from "./states/fetch/fetchActions";
import fetchReducer, { initialState } from "./states/fetch/fetchReducer";

export const UserContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((users) => {
        dispatch(fetchSuccess(users.data));
      })
      .catch((err) => {
        dispatch(fetchFailure(err));
      });
  }, []);

  return (
    <UserContext.Provider value={state}>
      <Users />
    </UserContext.Provider>
  );
}

export default App;
