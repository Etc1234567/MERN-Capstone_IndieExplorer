import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBand = (props) => {

    const [bandLink, setBandLink] = useState("");
    const [bandDesc, setBandDesc] = useState("");
    const [instagram, setInstagram] = useState("");
    const [facebook, setFacebook] = useState("");
    const [youtube, setYoutube] = useState("");
    const [linktree, setLinkTree] = useState("");
    const [spotifyID, setSpotifyID] = useState("");

    const navigate = useNavigate();
    
    const addBand = (e) => {
        e.preventDefault();
        
        let splitSpotify = bandLink.split("/");
        let id = splitSpotify[splitSpotify.length-1];
    
        setSpotifyID(id);

        const newBand = {
            url: bandLink,
            description: bandDesc,
            instagram,
            facebook,
            youtube,
            linktree,
            spotifyID: id
        };

        axios.post("http://localhost:9999/api/artists", newBand)
            .then(response => {
                console.log(response.data);
                navigate("/")
            })
            .catch(err => {
                console.log(err);
            })

        console.log(newBand);
        setBandLink("");
        setBandDesc("");
        setInstagram("");
        setFacebook("");
        setYoutube("");
        setLinkTree("");
        setSpotifyID("");
        alert("Success! Thanks for submitting a band recommendation.")
    }

    return (
        <>
        <div className="bandAdd">
        <h3 className="bandhead"> To feature an artist, add their Spotify link and a short description.</h3>
            <form onSubmit={ addBand }>
                <input onChange={(e) => setBandLink(e.target.value)} name="bandLink" type="text" className="bandAddInput" placeholder="Paste the Spotify link for the artist you would like to add." value={bandLink}></input>
                <textarea onChange={(e) => setBandDesc(e.target.value)} name="bandDesc" className="bandAddInput" placeholder="Write a short description of this band or paste their Spotify bio here." value={bandDesc}></textarea>
                <p>Optional links:</p>
                <div>
                <input onChange={(e) => setInstagram(e.target.value)} name="instagram" type="text" className="bandAddInput" placeholder="Paste the Instagram link here." value={instagram}></input>
                <input onChange={(e) => setFacebook(e.target.value)} name="facebook" type="text" className="bandAddInput" placeholder="Paste the Facebook link here." value={facebook}></input>
                <input onChange={(e) => setYoutube(e.target.value)} name="youtube" type="text" className="bandAddInput" placeholder="Paste the YouTube link here." value={youtube}></input>
                <input onChange={(e) => setLinkTree(e.target.value)} name="linktree" type="text" className="bandAddInput" placeholder="Paste the LinkTree link here." value={linktree}></input>
                </div>
                <button className="btn btn-light">Add</button>
            </form>
        </div>
        </>
    )
}

export default AddBand
