import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './services/userApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { userSlice } from './features/user';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [userSlice.name]: userSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([userApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
