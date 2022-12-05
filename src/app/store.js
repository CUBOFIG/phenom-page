import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlices";
import liveSliceReducer from "../features/live/liveSlices";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    live: liveSliceReducer,
  },
});
