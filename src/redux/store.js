import { configureStore } from "@reduxjs/toolkit"

import mpReducer from './shows'
import wliReducer from './watchlist'
import userReducer from './user'

export default configureStore({
    reducer: {
        mps: mpReducer,
        wlis: wliReducer,
        user: userReducer
    }
})