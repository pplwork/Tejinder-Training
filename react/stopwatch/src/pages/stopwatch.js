import Header from '../components/header'
import Clock from '../components/clock'
import ButtonBlock from '../components/button/buttonBlock';
import { useState } from 'react'
import LapBlock from '../components/lapBlock/lapBlock';




function Stopwatch() {
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([])
    const [lastLap, setLastLap] = useState(0)
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);

    // let ms = time.ms, s = time.s, m = time.m, h = time.h;

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    };

    const run = () => {
        setTime(t => t + 1)
    };

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    };

    const addLap = () => {
        let count = laps.length
        setLastLap(count)
        setLaps(l => [...l, time])
    }

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime(0)
        setLaps([])
        setLastLap(0)
    };
    // console.log(time)

    const resume = () => start();

    return (
        <>
            <Header>Stopwatch</Header>
            <main className="main">
                <div className="clock__container u-mb-m">
                    <Clock time={time} />
                    <ButtonBlock type={status}
                        start={start}
                        reset={reset}
                        resume={resume}
                        stop={stop}
                        addLap={addLap} />
                </div>
                <div className={`lap__container${laps.length === 0 ? '--empty' : ""}`}>
                    <LapBlock lastLap={lastLap} laps={laps} />
                </div>
            </main>
        </>)
}

export default Stopwatch