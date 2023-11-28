import { configureStore } from "@reduxjs/toolkit";

export const Reducer = configureStore({
    reducer: {
        coins: () => "Crypto Currency!"
    },
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;



