import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// const getMPs = axios.get('/api/getMP').then( res => {
//  return res.data
// })

export const getWLIs = createAsyncThunk('wlis/getWLIs', async () => {
  return axios.get('/api/getWLI').then(res => {
    return res.data
  })
})

//toolkit slice, state, reducers, actions in one place; normal redux has these separate
export const wliSlice = createSlice({
  name: 'watchListItem',
  initialState: {
    list: [], 
    status: null
  },
  reducers: {
    
  },
  extraReducers: {
    [getWLIs.pending] : (state, action) => {
      state.status = 'loading'
    },
    [getWLIs.fulfilled]: (state, {payload}) => {
      state.list = payload
      state.status = 'success'
    },
    [getWLIs.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
})
// Action creators are generated for each case reducer function
//export const { logState } = showSlice.actions
//all actions for countslice are held in showSlice.actions object, which is being destructured above

export default wliSlice.reducer