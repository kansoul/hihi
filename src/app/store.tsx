import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import tabSideBarReducer from './features/tabSideBar/tabSideBarSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tabSideBar: tabSideBarReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
