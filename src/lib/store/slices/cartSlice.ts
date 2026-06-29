import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

// Seed data for the design phase (matches the screenshots).
const initialState: CartState = {
  items: [
    {
      id: "rut145",
      name: "RUT 145",
      description:
        "The Teltonika RUT145 is a compact, industrial-grade Ethernet router specifically engineered to bridge legacy serial hardware into modern IP infrastructures.",
      price: 120,
      image: "/products/rut145.svg",
      quantity: 1,
    },
    {
      id: "rut145-2",
      name: "RUT 145",
      description:
        "The Teltonika RUT145 is a compact, industrial-grade Ethernet router specifically engineered to bridge legacy serial hardware into modern IP infrastructures.",
      price: 120,
      image: "/products/rut145.svg",
      quantity: 1,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) existing.quantity += action.payload.quantity;
      else state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    incrementQty(state, action: PayloadAction<string>) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQty(state, action: PayloadAction<string>) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, incrementQty, decrementQty, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
