import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const ArtistTile = (props) => {

     // DELETE THESE BEFORE PUSHING TO GITHUB
    // ******************************
    
    // ******************************

    // for each tile, we pass in the artist_id to feed into the Spotify api call and pass in the artistObj from the database
    const { artist_id, artistObj} = props;

    const navigate = useNavigate();

    const [artist, setArtist] = useState([]);
    const [topSong, setTopSong] = useState("")
    const [accessToken, setAccessToken] = useState("");


    useEffect(() => {

        const authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + "&client_secret=" + CLIENT_SECRET
        }

        const searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }

    const fetchAccessToken = async () => {
        try {
            const response = await fetch('https://accounts.spotify.com/api/token', authParameters);
            const data = await response.json();
            setAccessToken(data.access_token);
            // console.log(accessToken);
        } catch (error){
            console.log(error);
        }
    };

        const fetchArtistData = async () => {

            if (!accessToken) return;

            try {
                const artistResponse = await fetch('https://api.spotify.com/v1/artists/' + artist_id, searchParameters);
                const artistData = await artistResponse.json();
                setArtist(artistData);

                const topTrackResponse = await fetch("https://api.spotify.com/v1/artists/" + artist_id + "/top-tracks", searchParameters)
                const topTrackData = await topTrackResponse.json();
                setTopSong(topTrackData.tracks[0].id);
            } catch (error) {
                console.log(error);
            }
        };

        fetchAccessToken().then(() => fetchArtistData());

    }, [artist_id, accessToken]);

    const deleteArtist = (id) => {
        console.log("delete", id);
        axios.delete("http://localhost:9999/api/artists/" + id)
            .then(res => {
                console.log(res.data);
                navigate("/")
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <hr className="divider"></hr>

            {
                artist && topSong ? (

                    <div className="artistTile flex">
                        <div>
                            <a className="bandName" href={artist.external_urls.spotify}><h3>{artist.name}</h3></a>
                            <a href={artist.external_urls.spotify}><img className="bandPhoto" src={artist.images[0].url} alt="band photo"></img></a>
                            <div className="flex links">
                                {
                                    artistObj.instagram ? (<a href={artistObj.instagram}><img className="linkIcon" src="./src/assets/instagram.svg" alt="instagram icon"></img></a>) : ""
                                }
                                {
                                    artistObj.facebook ? (<a href={artistObj.facebook}><img className="linkIcon" src="./src/assets/facebook.svg" alt="facebook icon"></img></a>) : ""
                                }
                                {
                                    artistObj.youtube ? (<a href={artistObj.youtube}><img className="linkIcon" src="./src/assets/youtube.svg" alt="youtube icon"></img></a>) : ""
                                }
                                {
                                    artistObj.linktree ? (<a href={artistObj.linktree}><img className="linkIcon" src="./src/assets/linktree.svg" alt="linktree icon"></img></a>) : ""
                                }
                                
                                <a href={artist.external_urls.spotify}><img className="linkIcon" src="./src/assets/spotify.svg" alt="spotify icon"></img></a>
                                
                            </div>
                        </div>
                            <p className="description">{artistObj.description}</p>
                        <div>
                            <iframe className="spotifyPreview" src={"https://open.spotify.com/embed/track/" + topSong + "?utm_source=generator"} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                        <div className="space">
                            {/* <img className="miniIcon" src="./src/assets/pencil-square.svg" alt="edit icon"></img> */}
                            <img className="miniIcon" src="./src/assets/trash3-fill.svg" alt="delete icon" onClick={() => deleteArtist(artistObj._id)}></img>
                        </div>
                    </div>
                ) : (<p>Loading...</p>)
            }
        </>
    )
}

export default ArtistTile