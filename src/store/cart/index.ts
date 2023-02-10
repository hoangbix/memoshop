import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from 'src/types/product';

interface CartItem {
  product: ProductType;
  quantity: number;
}

interface CartState {
  carts: CartItem[];
}

const initialState: CartState = {
  // carts: typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('cart')!) : [],
  carts: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const product = action.payload;
      const itemIndex = state.carts.findIndex((card) => card.product._id === product._id);
      if (itemIndex === -1) {
        state.carts.push({ product, quantity: 1 });
      } else {
        state.carts[itemIndex].quantity += 1;
      }
      localStorage.setItem('cart', JSON.stringify(state.carts));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
