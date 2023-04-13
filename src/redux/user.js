import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUserInfo = createAsyncThunk('user/getUser', async (user) => {
    console.log('user', user)
  return axios({
    method: 'GET',
    url: '/api/getUser',
    data: {
        userID: user.sub
    }
  })
  .then(res => {
    console.log('REDUXRES', res)
  })
})

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
        console.log('state, action', state, action)
        //state.list = [...state.list, action.payload]
    }
  }
})
export const {addUser} = userSlice.actions
export default userSlice.reducer