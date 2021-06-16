import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import authReducer from "./features/authSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      products: productReducer,
      auth: authReducer,
    },
  });

export const wrapper = createWrapper(makeStore);
