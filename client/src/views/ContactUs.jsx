import Nav from "../components/Nav"

function Contact() {
    return (
        <>
            <Nav />

            <h1 className="pageHead contact">Contact Us</h1>

            <form className="container" onSubmit={() =>alert("Thank you! Your submission has been received and our team will connect with you via email as soon as they can.")}>
                <div className="mb-3">
                    <label htmlFor="contactName" className="form-label">Your Name:</label>
                    <input type="text" name="contactName" className="form-control"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="contactEmail" className="form-label">Your Email:</label>
                    <input type="text" name="contactEmail" className="form-control"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="contactComment" className="form-label">What Would You Like Help With?</label>
                    <textarea name="contactComment" placeholder="Share your question or comment here!" className="form-control"></textarea>
                </div>
                <button className="btn btn-light contactSub">Submit</button>
                <button className="btn btn-danger">Back</button>
            </form>
        </>
    )
}

export default Contact
