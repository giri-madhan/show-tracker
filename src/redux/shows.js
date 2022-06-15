import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// const getMPs = axios.get('/api/getMP').then( res => {
//  return res.data
// })

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
    status: null
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
    },
    [getMPs.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
})
// Action creators are generated for each case reducer function
//export const { logState } = showSlice.actions
//all actions for countslice are held in showSlice.actions object, which is being destructured above

export default mpSlice.reducer