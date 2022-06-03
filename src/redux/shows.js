import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const data = axios.get('/api/getMP').then( res => res.data)

//toolkit slice, state, reducers, actions in one place; normal redux has these separate
export const showSlice = createSlice({
  name: 'show',
  initialState: {
    mps: "hello"
  },
  reducers: {
    logState: (state) => {
        console.log('asd')
      },
  },
})

// Action creators are generated for each case reducer function
export const { logState } = showSlice.actions
//all actions for countslice are held in showSlice.actions object, which is being destructured above

export default showSlice.reducer