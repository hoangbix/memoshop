import { configureStore } from '@reduxjs/toolkit';

import product from 'src/store/product';

export const store = configureStore({
  reducer: {
    product,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
