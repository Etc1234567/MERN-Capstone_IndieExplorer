import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <div className="nav flex">
                <a href="#" className="navLink"><h1>🎸 IndieExplorer</h1></a>
                <div className="navLinks flex">
                    <a href="#" className="navLink"><h2>Venues</h2></a>
                    <a href="#" className="navLink"><h2>Shows</h2></a>
                    <a href="#" className="navLink"><h2>Festival Guides</h2></a>
                </div>
            </div>
        </>
    )
}

export default Nav
