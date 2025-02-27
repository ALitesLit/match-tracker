import { configureStore } from "@reduxjs/toolkit";

import StatusReducer from "./slices/StatusSlice";
import ApiReducer from "./slices/ApiSlice";


const store = configureStore({
    reducer: {
        api: ApiReducer,
        status: StatusReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
});


export default store;
export type RootState = ReturnType<typeof store.getState>;