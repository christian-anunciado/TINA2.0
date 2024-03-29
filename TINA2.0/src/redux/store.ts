import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import convoRedux from "./convoRedux";
import themeRedux from "./themeRedux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const themeReducer = persistReducer(persistConfig, themeRedux);
const convoReducer = persistReducer(persistConfig, convoRedux);

export const store = configureStore({
  reducer: { theme: themeReducer, conversation: convoReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
