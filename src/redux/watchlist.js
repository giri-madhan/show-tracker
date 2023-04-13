import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getWLIs = createAsyncThunk('wlis/getWLIs', async (userID) => {

  return axios({
    method: 'POST',
    url: '/api/getWLI',
    data: {
      userID
    }
  })
  .then( res => res.data)
  .catch(err => {
    throw new Error(err)
  })
})

const initialState = {
  list: [],
  isLoading: true,
  status: null
}

//toolkit slice, state, reducers, actions in one place; normal redux has these separate
export const wliSlice = createSlice({
  name: 'watchListItem',
  initialState,
  reducers: {
    deleteItem: (state, action) => {
      state.list = state.list.filter( item => item._id !== action.payload)
    },
    addItem: (state, action) => {
        state.list = [...state.list, action.payload]
    }
  },
  extraReducers: {
    [getWLIs.pending] : (state, action) => {
      state.status = 'loading'
      state.isLoading = true
    },
    [getWLIs.fulfilled]: (state, {payload}) => {
      state.list = payload
      state.status = 'success'
      state.isLoading = false
    },
    [getWLIs.rejected]: (state, action) => {
      state.status = 'failed'
      state.isLoading = false
    }
  }
})
// Action creators are generated for each case reducer function
//export const { logState } = showSlice.actions
//all actions for countslice are held in showSlice.actions object, which is being destructured above
export const {deleteItem, addItem} = wliSlice.actions
export default wliSlice.reducer