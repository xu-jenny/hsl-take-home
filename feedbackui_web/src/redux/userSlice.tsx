import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from "../utils/models";

const initialState: User = {
    uid: '',
    username: '',
    has_admin_access: false,
}

export const userSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.uid = action.payload.uid
      state.username = action.payload.username
      state.has_admin_access = action.payload.has_admin_access
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer