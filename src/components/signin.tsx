import React from "react";
import { useAuth } from "../context/authContext";
import usersCred from "../data/users";

function SignIn() {
  const authState = useAuth();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const { username, password } = e.currentTarget as typeof e.currentTarget & {
      username: { value: string };
      password: { value: string };
    };
    const user = usersCred.find(
      (item) =>
        item.username === username.value && item.password === password.value
    );
    if (!user) return;
    authState.dispatch({
      type: "sign_in",
      payload: {
        username: user.username,
        password: user.password,
      },
    });
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="sign-in-username">
          Username:
          <input name="username" type="text" id="sign-in-username" />
        </label>
        <label htmlFor="sign-in-password">
          Password:
          <input type="password" name="password" id="sign-in-password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
