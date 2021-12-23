import { createSlice } from '@reduxjs/toolkit'

const initialState = { laps: [], lastLap: 0 }

const lapSlice = createSlice({
    name: "laps",
    initialState,
    reducers: {
        addLap(state, action) {
            let count = state.laps.length
            state.laps = [...state.laps, action.payload];
            state.lastLap = count;
        },
        reset(state) {
            state.laps = []
            state.lastLap = 0
        },
    }
});

export const lapActions = lapSlice.actions

export default lapSlice