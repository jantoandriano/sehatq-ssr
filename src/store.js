import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import authReducer from "./features/authSlice";

export default configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
  },
});
