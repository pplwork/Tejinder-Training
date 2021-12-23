import { useSelector, useDispatch } from 'react-redux'
import { timerActions } from '../store/timer'
import { lapActions } from '../store/lap'

function Stopwatch() {
    const dispatch = useDispatch()

    const timer = useSelector(state => state.timer)

    const run = () => {
        dispatch(timerActions.increment())
    }

    const start = () => {
        run();
        const interv = setInterval(run, 100)
        dispatch(timerActions.setInterv(interv))
    }

    const reset = () => {
        dispatch(timerActions.reset())
        dispatch(lapActions.reset())
    }

    const addLap = () => {
        dispatch(lapActions.addLap(timer.time))
    }

    const stop = () => {
        dispatch(timerActions.stop())
        dispatch(timerActions.switch())

    }

    const resume = () => {
        dispatch(timerActions.switch())
        start()
    };


    return (<>
        {timer.time}
        {timer.active ? <>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>RESET</button>
            {timer.stopped ? <button onClick={resume}>resume</button> : <button onClick={addLap}>Add lap</button>}
        </>
            : <button onClick={start}>Start</button>}

    </>)
}

export default Stopwatch