import { Link } from "react-router-dom";
import Header from "../components/header";

function Home() {

    return (
        <>
            <Header>Home</Header>
            <p className="u-center-text u-mt-l">
                <Link className="btn btn--link" to='/stopwatch' >Stopwatch app</Link>
            </p>
        </>
    )
}

export default Home