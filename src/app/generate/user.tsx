import React from "react";
import { addUser } from "../../features/userSlice";
import { useAppDispatch } from "../hooks";

function UserGenerator() {
  const dispatch = useAppDispatch();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const { num } = e.currentTarget;
          dispatch(addUser({ num: num.value }));
        }}
      >
        <label htmlFor="number-of-users">number of users </label>
        <input type="number" name="num" id="number-of-users" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserGenerator;
