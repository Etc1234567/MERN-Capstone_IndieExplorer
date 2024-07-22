function AddBand() {
    return (
        <div className="bandAdd">
        <p>Thank you for contributing to our city guide! When selecting an artist to feature, please make sure they have less than 100,000 followers and are local. All suggestions will be reviewed by the moderators.</p>
            <form>
                <input type="text" className="bandAddInput" placeholder="Paste the Spotify link for the artist you would like to add."></input>
                <button className="btn btn-light">Add</button>
            </form>
        </div>
    )
}

export default AddBand
