const format = data => data < 10 ? "0" + data : data;

function Lap(props) {

    return (
        <span className="lap">
            <p className="lap__hour">{format(props.h)}</p>:
            <p className="lap__min">{format(props.m)}</p>:
            <p className="lap__sec">{format(props.s)}</p>:
            <p className="lap__msec">{format(props.ms)}</p>
        </span>
    )
}