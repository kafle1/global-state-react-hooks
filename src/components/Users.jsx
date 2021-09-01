import React, { useContext } from "react";
import { UserContext } from "../App.js";

const Users = () => {
  const state = useContext(UserContext);
  return (
    <div>
      <h1>Users</h1>
      {state.loading ? <p>Loading...</p> : null}
      {state.error ? <p> {state.error.message} </p> : null}
      {state.users &&
        state.users.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })}
    </div>
  );
};

export default Users;
