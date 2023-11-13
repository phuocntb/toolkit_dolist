import { configureStore } from "@reduxjs/toolkit";
import { doListReducer } from "./slices/dolist.slice";


const store = configureStore({
    reducer: {
        doListStore: doListReducer
    }
})

export default store;