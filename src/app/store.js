import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../features/cryptoApi'
import { cryptoDetailApi } from '../features/cryptoDetailApi'
import { cryptoNewsApi } from '../features/cryptoNewsApi'
import { relatedNewsApi } from '../features/relatedNews'
//import { setupListeners } from '@reduxjs/toolkit/query'

export default configureStore({
  reducer: {

    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoDetailApi.reducerPath]: cryptoDetailApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [relatedNewsApi.reducerPath]: relatedNewsApi.reducer,

  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoApi.middleware, cryptoDetailApi.middleware, cryptoNewsApi.middleware, 
    relatedNewsApi.middleware)
 
})

//etupListeners(store.dispatch)