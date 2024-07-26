import Nav from "../components/Nav"
import { Link } from "react-router-dom"
import { useState } from "react"

const Contact = (props) => {

    const [contactList, setContactList] = useState([]);

    const [contactState, setContactState] = useState({
        contactName: "",
        contactEmail: "",
        contactComment: ""
    });

    const handleChange = (e) => {
        setContactState((prevValue) =>({
            ...prevValue,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let newComment = {...contactState};
        setContactList((prevContactList) => [newComment, ...prevContactList])
        setContactState({
            contactName: "",
            contactEmail: "",
            contactComment: ""
        })
        alert("Thank you! Your submission has been received and our team will connect with you via email as soon as they can.");
    }

    return (
        <>
            <Nav />

            <h1 className="pageHead contact">Contact Us</h1>

            <form className="container contactForm" onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="contactName" className="form-label">Your Name:</label>
                    <input type="text" name="contactName" className="form-control" value={contactState.contactName} onChange={(e)=>handleChange(e)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="contactEmail" className="form-label">Your Email:</label>
                    <input type="text" name="contactEmail" className="form-control" value={contactState.contactEmail} onChange={(e)=>handleChange(e)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="contactComment" className="form-label">What Would You Like Help With?</label>
                    <textarea name="contactComment" placeholder="Share your question or comment here!" className="form-control" rows="10" value={contactState.contactComment} onChange={(e)=>handleChange(e)}></textarea>
                </div>
                <button className="btn btn-light contactSub">Submit</button>
                <Link to="/" className="btn btn-danger">Back</Link>
            </form>
        </>
    )
}

export default Contact
