import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <div className="nav flex">
                <Link to="/" className="navLink"><h1>🎸 IndieExplorer</h1></Link>
                <div className="navLinks flex">
                    <div className="dropdown">
                        <a href="#" className="navLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"><h2>Venues</h2></a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item" href="https://www.therinokc.com/events">The Rino</a></li>
                            <li><a className="dropdown-item" href="https://lemonadeparkkc.com/tickets">Lemonade Park</a></li>
                            <li><a className="dropdown-item" href="https://www.therecordbar.com/tickets">RecordBar</a></li>
                            <li><a className="dropdown-item" href="https://www.theshipkc.com/music">The Ship</a></li>
                            <li><a className="dropdown-item" href="https://thegranada.com/shows">The Granada</a></li>
                            <li><a className="dropdown-item" href="https://thebottlenecklive.com/">The Bottleneck</a></li>
                        </ul>
                    </div>

                    {/* <a href="#" className="navLink"><h2>Shows</h2></a> */}

                    <div className="dropdown">
                        <a href="#" className="navLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"><h2>Festival Guides</h2></a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item" href="https://www.manorrecords.com/manorfest6">Manor Fest 6</a></li>
                            <li><a className="dropdown-item" href="https://makemusicday.org/kcmo/">Make Music Day Kansas City 2024</a></li>
                            <li><a className="dropdown-item" href="https://www.cmfkc.com/">CrossRoads Music Fest</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
