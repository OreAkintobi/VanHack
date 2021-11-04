import { createSlice } from '@reduxjs/toolkit';

const snackBar = createSlice({
  name: 'snackBar',
  initialState: {
    visible: false,
    text: '',
  },
  reducers: {
    openSnackBar: (state, action) => {
      return {
        ...state,
        visible: true,
        text: action.payload,
      };
    },
    closeSnackBar: (state) => {
      return {
        ...state,
        visible: false,
        text: '',
      };
    },
  },
});

export const { openSnackBar, closeSnackBar } = snackBar.actions;

export default snackBar.reducer;
