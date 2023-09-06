
import { configureStore } from '@reduxjs/toolkit';
import { manuApi } from './manu';
import { searchApi } from './search';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { siteBarSlice } from './siteBar';
import { quoteFormSlice } from './quoteForm';
import { latestNewsApi } from './latestNews';
import { latestBlogsApi } from './latestBlogs';
import { blogsApi } from './blogs';
import { dynamicDataApi } from './dynamicData';
import { newsApi } from './news';
import { quoteApi } from './quote';
import { loadingSlice } from './loading';

export const store = configureStore({
  reducer: {
    [manuApi.reducerPath]: manuApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [latestNewsApi.reducerPath]: latestNewsApi.reducer,
    [latestBlogsApi.reducerPath]: latestBlogsApi.reducer,
    [blogsApi.reducerPath]: blogsApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [dynamicDataApi.reducerPath]: dynamicDataApi.reducer,
    [quoteApi.reducerPath]: quoteApi.reducer,
    siteBar: siteBarSlice.reducer,
    quoteFormSlice: quoteFormSlice.reducer,
    loading: loadingSlice.reducer 
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
    manuApi.middleware,
    searchApi.middleware,
    latestNewsApi.middleware,
    latestBlogsApi.middleware,
    blogsApi.middleware,
    dynamicDataApi.middleware,
    newsApi.middleware,
    quoteApi.middleware
  ]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;