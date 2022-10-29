import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// const getMPs = axios.get('/api/getMP').then( res => {
//  return res.data
// })

// Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

export const getMPs = createAsyncThunk('mps/getMPs', async () => {
  return axios.get('/api/getMP').then(res => {
    return res.data
  })
})

//toolkit slice, state, reducers, actions in one place; normal redux has these separate
export const mpSlice = createSlice({
  name: 'show',
  initialState: {
    list: [], 
    status: null,
    isLoading: true
  },
  reducers: {
    
  },
  extraReducers: {
    [getMPs.pending] : (state, action) => {
      state.status = 'loading'
    },
    [getMPs.fulfilled]: (state, {payload}) => {
      state.list = payload
      state.status = 'success'
      state.isLoading = false
    },
    [getMPs.rejected]: (state, action) => {
      state.status = 'failed'
      state.isLoading = false
    }
  }
})
// Action creators are generated for each case reducer function
//export const { logState } = showSlice.actions
//all actions for countslice are held in showSlice.actions object, which is being destructured above

export default mpSlice.reducer