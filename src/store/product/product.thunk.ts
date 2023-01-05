import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosClient from 'src/apiClient/axiosClient';

export const fetchProduct = createAsyncThunk('product/fetchProduct', async () => {
  const { data } = await axiosClient.get('/product');

  return data;
});
