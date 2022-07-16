import { configureStore } from "@reduxjs/toolkit"

import mpReducer from './shows'
import wliReducer from './watchlist'
//new reducer goes here

export default configureStore({
    reducer: {
        mps: mpReducer,
        wlis: wliReducer
    }
})