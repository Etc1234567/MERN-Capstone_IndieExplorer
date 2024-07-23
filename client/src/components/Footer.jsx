import { Link } from "react-router-dom"

function Footer() {
    return (
        <>
            <div className="footer flex">
                <Link to="/about" className="navLink"><h3>About Us</h3></Link>
                <h3> Questions or want to become a curator? <Link to="/contact" className="btn btn-light">Contact our team!</Link> </h3>
            </div>
        </>
    )
}

export default Footer