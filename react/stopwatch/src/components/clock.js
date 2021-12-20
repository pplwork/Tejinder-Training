import { useState } from 'react'
import ButtonBlock from './buttonBlock';

function Clock() {
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
    const [laps, setLaps] = useState([])
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);

    let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    };

    const run = () => {
        if (updatedM === 60) {
            updatedH++;
            updatedM = 0;
        }
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        if (updatedMs === 100) {
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;
        return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
    };

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    };

    const addLap = () => {
        setLaps(l => [...l, time])
    }

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ ms: 0, s: 0, m: 0, h: 0 })
        setLaps([])
    };

    const resume = () => start();

    return (<div className="main-section">
        <div className="clock-holder">
            <div className="stopwatch">
                {time.h}:{time.m}:{time.s}:{time.ms}
                {laps.map(e => <h4>{e.h}:{e.m}:{e.s}:{e.ms}</h4>)}
                <ButtonBlock type={status} start={start} reset={reset} resume={resume} stop={stop} addLap={addLap} />
            </div>
        </div>
    </div>)
}

export default Clock