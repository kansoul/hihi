import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTHENTICATE_TOKEN_KEY, AUTHENTICATE_USER_KEY } from '../../config';
import { RootState } from '../../store';

// Define a type for the slice state
function getSavedState(key: string) {
  if (key) {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }
  return '';
}

function saveState(key: any, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}
// Define the initial state using that type
export interface AuthState {
  currentUser: any;
  accessToken: any;
  isAuthenticated: boolean;
}

const resolveCurrentUserFromStorage = () => {
  // _location: api|localStorage
  const user: any = getSavedState(AUTHENTICATE_USER_KEY);
  user.location = 'localStorage';
  return user;
};

const initialState: AuthState = {
  currentUser: resolveCurrentUserFromStorage(),
  accessToken: getSavedState(AUTHENTICATE_TOKEN_KEY),
  // for case access token expired, so we need use isAuthenticated for checking instead of currentUser and accessToken
  isAuthenticated: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCurrentUser: (state, action: PayloadAction<any>) => {
      state.currentUser = action.payload;
      saveState('auth.currentUser', action.payload);
    },
    setAccessToken: (state, action: PayloadAction<any>) => {
      state.accessToken = action.payload;
      saveState('auth.accessToken', action.payload);
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setCurrentUser, setAccessToken, setIsAuthenticated } = authSlice.actions;
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCurrentUser = (state: RootState) => state.auth.currentUser;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

export default authSlice.reducer;
