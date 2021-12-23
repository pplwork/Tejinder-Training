import { configureStore } from "@reduxjs/toolkit";
import timerSlice from "./timer";
import lapSlice from "./lap";

const store = configureStore({
    reducer: { timer: timerSlice.reducer, laps: lapSlice.reducer }
})

export default store