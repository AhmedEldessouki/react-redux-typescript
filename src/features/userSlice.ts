import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateUser } from "../app/generate/user";

type UserType = {
  firstName: string;
  gender: string;
  jobTitle: string;
  title: string;
  prefix: string;
  phoneNumber: string;
};
type StateType = {
  userList: Array<UserType>;
};

const initialState: StateType = {
  userList: generateUser(),
};

const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<{ num: number } | undefined>) {
      state.userList.push(...generateUser(action.payload?.num));
      return state;
    },
    removeUser(state, action: PayloadAction<{ index: number }>) {
      state.userList.splice(action.payload.index, 1);
      return state;
    },
    updateUser(
      state,
      action: PayloadAction<{ index: number; updateUserData: UserType }>
    ) {
      state.userList.splice(
        action.payload.index,
        1,
        action.payload.updateUserData
      );
      return state;
    },
  },
});
export const { addUser, removeUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
