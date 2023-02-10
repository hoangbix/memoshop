import { Middleware } from '@reduxjs/toolkit';

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem('cart', JSON.stringify(store.getState().cart.items));
  return result;
};

export default localStorageMiddleware;
