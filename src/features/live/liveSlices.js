const { createSlice } = require("@reduxjs/toolkit");

const initialStatejf = {
  state: false,
};

export const liveSlice = createSlice({
  name: "live",
  initialState: initialStatejf,
  reducers: {
    changeState: (state, action) => {
      return { ...state, state: action.payload };
    },
  },
});

export const { changeState } = liveSlice.actions;

export default liveSlice.reducer;
