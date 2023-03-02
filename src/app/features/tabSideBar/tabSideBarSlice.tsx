import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAB_SIDE_BAR } from '../../config/app';
import { RootState } from '../../store';

// Define a type for the slice state
interface TabSideBarState {
  value: string;
}

// Define the initial state using that type
const initialState: TabSideBarState = {
  value: TAB_SIDE_BAR.CHAT
};
export const tabSideBarSlice = createSlice({
  name: 'tabSideBar',
  initialState,
  reducers: {
    setTabSideBar: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setTabSideBar } = tabSideBarSlice.actions;
export const selectTabSideBar = (state: RootState) => state.tabSideBar.value;
export default tabSideBarSlice.reducer;
