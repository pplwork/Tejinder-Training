import Button from "./button";
function ButtonBlock({ type, className, start, resume, reset, stop, addLap }) {
    if (type === 0) {
        return (<div>
            <Button className={className} onClick={start}>Start</Button>
        </div>)
    } else if (type === 1) {
        return (<div>
            <Button className={className} onClick={addLap}>Lap</Button>
            <Button className={className} onClick={stop}>Pause</Button>
        </div>)
    } else {
        return (<div>
            <Button className={className} onClick={reset}>Reset</Button>
            <Button className={className} onClick={resume}>Resume</Button>
        </div>)
    }
}


export default ButtonBlock