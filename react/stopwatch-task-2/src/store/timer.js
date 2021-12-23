import { createSlice } from '@reduxjs/toolkit'

const initialState = { time: 0, paused: false, active: false, stopped: false, interval: null }

const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        increment(state) {
            if (!state.active)
                state.active = true
            state.time += 10
        },
        reset(state) {
            clearInterval(state.interval)
            state.time = 0
            state.paused = false
            state.active = false
            state.stopped = false
            state.interval = null
        },
        stop(state) {
            clearInterval(state.interval)
            state.stopped = true
        },
        switch(state) {
            if (!state.paused)
                clearInterval(state.interval)
            state.paused = !state.paused
        },
        setInterv(state, action) { state.interval = action.payload }
    }
});

export const timerActions = timerSlice.actions

export default timerSlice