import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { CryptoAPI } from "./CryptoAPI";

export const Reducer = configureStore({
    reducer: {
        [CryptoAPI.reducerPath]: CryptoAPI.reducer,        
    },  // gDM = getDefaultMiddleware
    middleware: (gDM) => gDM().concat(CryptoAPI.middleware),
});

setupListeners(Reducer.dispatch);
export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;



