import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <div className="nav flex">
                <h1>🎸 IndieExplorer</h1>
                <div className="navLinks flex">
                    <h2>Venues</h2>
                    <h2>Shows</h2>
                    <h2>Festival Guides</h2>
                </div>
            </div>
        </>
    )
}

export default Nav
