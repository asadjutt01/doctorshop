import { getItem, setItem } from '@/utils/localStorage/localStorage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define Address Type
interface Address {
  id: number;
  street: string;
  city: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

// Initial State
const initialState = {
  user: getItem('user') || null,
  user_Comapany_id: getItem('user_Comapany_id') || null,
  userAddressList: [],
};

const userConfigSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    storeUser(state, { payload }) {
      setItem('user', payload);
      state.user = payload;
    },
    setUserCompanyId(state, { payload }) {
      setItem('user_Comapany_id', payload);
      state.user_Comapany_id = payload;
    },
    setUserAddressList(state, { payload }) {
      setItem('userAddressList', payload);
      state.userAddressList = payload;
    },
  },
});

export const { storeUser, setUserCompanyId, setUserAddressList } = userConfigSlice.actions;
export default userConfigSlice.reducer;
