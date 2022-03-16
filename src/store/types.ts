import store from '.';

export type RootState = ReturnType<typeof store.getState>;

export type TStoreDispatch = typeof store.dispatch;
