import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import companyReducer from "../features/companySlice";

export const store = configureStore({
  reducer: { user: userReducer, companies: companyReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
