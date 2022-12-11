const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialStatejf = {
  state: false,
  isOpen: false,
  dataLive: {},
  isLoading: true,
  currentStatus: false,
};

const url = "https://api-phenomenal-production.up.railway.app/";
//https://api-phenomenal-production.up.railway.app/

export const getDataLive = createAsyncThunk("cart/getDataLive", () => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
});

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
  extraReducers: {
    [getDataLive.pending]: (state) => {
      state.isLoading = true;
    },
    [getDataLive.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dataLive = action.payload;
      state.currentStatus = action.payload?.state === "online" ? true : false;
    },
    [getDataLive.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { changeState, toggle } = liveSlice.actions;

export default liveSlice.reducer;
