import ArtistTile from "../components/ArtistTile"
import AddBand from "./AddBand"
import Nav from "../components/Nav"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {

    const [artistList, setArtistList] = useState([]);

// first, get temporary api access token. This is required to make API calls for Spotify

    // const [accessToken, setAccessToken] = useState("");

    // const authParameters = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + "&client_secret=" + CLIENT_SECRET
    // }

    // const fetchAccessToken = async () => {
    //     try {
    //         const response = await fetch('https://accounts.spotify.com/api/token', authParameters);
    //         const data = await response.json();
    //         setAccessToken(data.access_token);
    //         console.log(accessToken);
    //     } catch (error){
    //         console.log(error);
    //     }
    // };

    useEffect(() => {

        axios.get("http://localhost:9999/api/artists")
            .then((serverResponse) => {
                console.log(serverResponse.data);
                setArtistList(serverResponse.data);
            })
            .catch(err => console.log(err));

        // fetchAccessToken();

    }, []);

    return (
        <>
            <Nav />

            <div className="flex intro">
                <h3>Welcome to IndieExplorer! Check out some of the local artists below or start adding your own.</h3>
                {/* <Link to={"/addband"}><img className="linkIcon" src="./src/assets/plus-circle-fill.svg" alt="add icon"></img></Link> */}
                <a href="#collapse" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapse"><img className="linkIcon" src="./src/assets/plus-circle-fill.svg" alt="add icon"></img></a>
            </div>
            <div className="collapse" id="collapse">
                <AddBand artistList = {artistList} setArtistList = {setArtistList}/>
            </div>

            <h1 className="pageHead">Kansas City, Missouri</h1>

            {
                artistList.map((artist) => {
                    return (
                        <ArtistTile key={artist._id} artist_id={artist.spotifyID} artistObj = {artist} artistList = {artistList} setArtistList = {setArtistList} />
                    )
                })
            }
        </>
    )
}

export default Home
