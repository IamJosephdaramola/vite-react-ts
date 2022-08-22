import { configureStore, Action } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import cakeReducer from "../features/cake/cakeSlice.js";
import iceCreamReducer from "../features/iceCream/iceCreamSlice.js";
import userReducer from "../features/user/userSlice.js";
import { ThunkAction } from "redux-thunk";

const logger = createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>;
export default store;
