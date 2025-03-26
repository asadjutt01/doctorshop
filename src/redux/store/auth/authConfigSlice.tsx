// import { getItem } from '@/utils/localStorage/localStorage';
// import { createSlice } from '@reduxjs/toolkit';

// const token = getItem('authToken');

// const initialState = {
//     isLoading: false,
//     isAuthenticated: token ? true : false,
// };

// const authsConfigSlice = createSlice({
//     name: 'auth',
//     initialState: initialState,
//     reducers: {
//         toggleLoading(state, { payload }) {
//             payload = payload || state.isLoading;
//             state.isLoading = payload;
//         },
//         setAuthenticated(state, { payload }) {
//             state.isAuthenticated = payload;
//         },
//     },
// });

// export const { toggleLoading, setAuthenticated } = authsConfigSlice.actions;

// export default authsConfigSlice.reducer;
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface AuthState {
//     isAuthenticated: boolean;
//     user: any | null;
//     token: string | null;
// }

// const initialState: AuthState = {
//     isAuthenticated: false,
//     user: null,
//     token: null,
// };

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         login: (state, action: PayloadAction<{ user: any; token: string }>) => {
//             state.isAuthenticated = true;
//             state.user = action.payload.user;
//             state.token = action.payload.token;
//         },
//         logout: (state) => {
//             state.isAuthenticated = false;
//             state.user = null;
//             state.token = null;
//         },
//     },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;
import { getItem } from "@/utils/localStorage/localStorage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  token: string | null;
}
const isAuthenticated = () => {
  const authToken = getItem("authToken");
  return Boolean(authToken); // More explicit conversion
};

const initialState: AuthState = {
  isAuthenticated: isAuthenticated(),
  user: getItem("user")  || null, // Retrieve user if stored
  token: getItem("authToken") || null, // Store the token if available
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: any; token: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
