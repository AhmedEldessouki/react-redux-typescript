import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Faker from "faker/locale/en";
import type { UserType } from "../types/user";

const generateUser = (
  num: number | undefined = 1,
  overRides:
    | {
        role: "admin" | "user";
        company: string;
      }
    | undefined = {
    company: "",
    role: "user",
  }
): Array<UserType> => {
  const users: Array<UserType> = [];
  for (let index = 0; index < num; index++) {
    users.push({
      firstName: Faker.name.firstName(),
      gender: Faker.name.gender(),
      jobTitle: Faker.name.jobTitle(),
      title: Faker.name.title(),
      prefix: Faker.name.prefix(),
      phoneNumber: Faker.phone.phoneNumber(),
      ...overRides,
    });
  }
  return users;
};

type StateType = {
  userList: Array<UserType>;
};

const initialState: StateType = {
  userList: generateUser(),
};

const userSlice = createSlice({
  name: "user",
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
