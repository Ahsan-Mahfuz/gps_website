import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthUser {
  name: string;
  email: string;
  role: "customer" | "dealer";
}

interface AuthState {
  isAuthenticated: boolean;
  user: AuthUser | null;
  /** True once we've attempted to restore auth from storage — guards avoid bouncing on first paint. */
  hydrated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  hydrated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<AuthUser>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    hydrate(state, action: PayloadAction<AuthUser | null>) {
      state.hydrated = true;
      if (action.payload) {
        state.isAuthenticated = true;
        state.user = action.payload;
      }
    },
  },
});

export const { login, logout, hydrate } = authSlice.actions;
export default authSlice.reducer;
