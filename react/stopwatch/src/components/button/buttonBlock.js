import Button from "./button";
function ButtonBlock({ type, className, start, resume, reset, stop, addLap }) {
    return (<div className={`btn__block btn__block-${type}`}>
        <Button className="btn btn--start" onClick={start}>Start</Button>
        <Button className="btn btn--lap" onClick={addLap}>Lap</Button>
        <Button className="btn btn--pause" onClick={stop}>Pause</Button>
        <Button className="btn btn--reset" onClick={reset}>Reset</Button>
        <Button className="btn btn--resume" onClick={resume}>Resume</Button>
    </div>)
}


export default ButtonBlock