import { configureStore } from "@reduxjs/toolkit";
import {WhatsApi} from "./api"

export default configureStore ({
    reducer: {
        [WhatsApi.reducerPath]: WhatsApi.reducer 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(WhatsApi.middleware) 
})