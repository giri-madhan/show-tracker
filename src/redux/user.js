import {createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  isLoading: true,
  status: null
}

export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    addUser: (state, action) => {
        state.user = action.payload
    }
  }
})
export const {addUser} = userSlice.actions
export default userSlice.reducer