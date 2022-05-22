import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counter'
//new reducer goes here

export default configureStore({
    reducer: {
        counter: counterReducer,
        // user: userReducer
    }
})