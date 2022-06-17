import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counter'
import mpReducer from './shows'
import wliReducer from './watchlist'
//new reducer goes here

export default configureStore({
    reducer: {
        counter: counterReducer,
        mps: mpReducer,
        wlis: wliReducer
    }
})