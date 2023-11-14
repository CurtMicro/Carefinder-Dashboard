import { configureStore } from "@reduxjs/toolkit";
import hospitalsReducer from "./reducers/hospitals";

export const store = configureStore({
  reducer: {
    hospitals: hospitalsReducer,
  },
});

export default store;
