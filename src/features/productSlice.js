import { createSlice } from "@reduxjs/toolkit";
import api from "../api/productApi";
import { share as Toast } from "../utils/toast";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    categories: [],
    productsName: [],
    purchasedProducts: [],
    wishListProducts: [],
  },
  reducers: {
    productsLoaded: (state, action) => {
      state.productsName = action.payload;
    },
    categoriesLoaded: (state, action) => {
      state.categories = action.payload;
    },
    purchaseProduct: (state, action) => {
      let purchasedItem = state.productsName.find(
        (item) => item.id === action.payload
      );

      state.purchasedProducts = [...state.purchasedProducts, purchasedItem];
      Toast("Enjoy");
    },
    addWishList: (state, action) => {
      let wishListItem = state.productsName.find(
        (item) => item.id === action.payload
      );

      state.wishListProducts = [...state.wishListProducts, wishListItem];
      Toast("Added to Wishlist");
    },
  },
});

export const {
  productsLoaded,
  categoriesLoaded,
  purchaseProduct,
  addWishList,
} = productSlice.actions;

export default productSlice.reducer;

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    try {
      let productApi = new api(
        "https://private-4639ce-ecommerce56.apiary-mock.com/home"
      );
      let response = await productApi.fetchProducts();
      console.log(response.data, "----");
      dispatch(productsLoaded(response.data.products));
      dispatch(categoriesLoaded(response.data.categories));
      return response;
    } catch (err) {}
  };
};
