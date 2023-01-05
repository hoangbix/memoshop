import { createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from './product.thunk';

import { ProductType } from 'src/types/product';

export interface ProductStateType {
  data: ProductType[];
  total: number;
}

export const initialState: ProductStateType = {
  data: [],
  total: 0,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.data = action.payload;
      state.total = action.payload.length;
    });
  },
});

export default productSlice.reducer;
