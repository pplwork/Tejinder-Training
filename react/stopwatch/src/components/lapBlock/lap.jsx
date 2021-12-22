import format from "../utilities/format"

function Lap(props) {
    // console.log(props.diff)
    return (
        <tr className={`lap ${props.count === props.lastLap + 1 ? "lap__last" : ""}`}>
            <td className={`lap__text lap__count `}>{format(props.count)}</td>
            <td className="lap__text lap__time">
                {format(props.hr)}:
                {format(props.min)}:
                {format(props.sec)}.
                {format(props.ms)}</td>
            <td className="lap__text lap__difference">+{format(props.diff.hr)}:
                {format(props.diff.min)}:
                {format(props.diff.sec)}.
                {format(props.diff.ms)}
            </td>
        </tr>
    )
}

export default Lap