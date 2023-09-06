import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { verbsApi } from './apis/api'

export const store = configureStore({
    reducer: {
        [verbsApi.reducerPath]: verbsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(verbsApi.middleware)
    }
}) 

setupListeners(store.dispatch)

export { useGetVerbsQuery } from './apis/api'