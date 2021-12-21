import Header from '../components/header'
import Clock from '../components/clock'
import ButtonBlock from '../components/button/buttonBlock';
import { useState } from 'react'

function Stopwatch() {
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
    const [laps, setLaps] = useState([])
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);

    let ms = time.ms, s = time.s, m = time.m, h = time.h;

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    };

    const run = () => {
        if (m === 60) {
            h++;
            m = 0;
        }
        if (s === 60) {
            m++;
            s = 0;
        }
        if (ms === 100) {
            s++;
            ms = 0;
        }
        ms++;
        return setTime({ ms, s, m, h });
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

    return (
        <main className="main">
            <Header>Stopwatch</Header>
            <Clock />
            <div className='lap__container'>
                LAPS
            </div>
            <ButtonBlock type={status}
                start={start}
                reset={reset}
                resume={resume}
                stop={stop}
                addLap={addLap} />
        </main>
    )
}

export default Stopwatch