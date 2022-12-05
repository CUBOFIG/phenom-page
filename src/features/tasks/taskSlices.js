const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  {
    id: 1,
    title: "Read the docs",
    description: "Read the docs for Redux Toolkit",
    completed: false,
  },
  {
    id: 2,
    title: "Take a nap",
    description: "Take a nap after reading the docs",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
