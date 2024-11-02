import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./feature/cart/cartSlice";
import authApi from "./feature/auth/authApi";
import authReducer from "./feature/auth/authSlice";
import productsApi from "./feature/products/productsApi";
import reviewApi from "./feature/reviews/reviewsApi";
import statsApi from "./feature/stats/statsApi";
import orderApi from "./feature/orders/orderApi";
export default configureStore({
  reducer: {
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [statsApi.reducerPath]: statsApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      productsApi.middleware,
      reviewApi.middleware,
      statsApi.middleware,
      orderApi.middleware
    ),
});
