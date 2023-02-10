import { configureStore } from '@reduxjs/toolkit';

import product from 'src/store/product';
import cart from 'src/store/cart';

import localStorageMiddleware from './middleware/localStorageMiddleware';

export const store = configureStore({
  reducer: {
    product,
    cart,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      localStorageMiddleware,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
