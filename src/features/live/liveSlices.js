const { createSlice } = require("@reduxjs/toolkit");

const initialStatejf = {
  state: false,
  isOpen: false,
};

export const liveSlice = createSlice({
  name: "live",
  initialState: initialStatejf,
  reducers: {
    changeState: (state, action) => {
      return { ...state, state: action.payload };
    },
    toggle: (state, action) => {
      return { ...state, isOpen: action.payload };
    },
  },
});

export const { changeState, toggle } = liveSlice.actions;

export default liveSlice.reducer;
