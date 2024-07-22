
function ArtistTile() {
    return (
        <>
            <hr className="divider"></hr>
            <div className="artistTile flex">
                <div>
                    <h3 className="bandName">Them Crooked Vultures</h3>
                    <img className="bandPhoto" src="./src/assets/pexels-sebastian-ervi-866902-1763075.jpg" alt="band photo"></img>
                    <div className="flex links">
                        <a href="#"><img className="linkIcon" src="./src/assets/instagram.svg" alt="instagram icon"></img></a>
                        <a href="#"><img className="linkIcon" src="./src/assets/snapchat.svg" alt="snapchat icon"></img></a>
                        <a href="#"><img className="linkIcon" src="./src/assets/spotify.svg" alt="spotify icon"></img></a>
                        <a href="#"><img className="linkIcon" src="./src/assets/youtube.svg" alt="youtube icon"></img></a>
                    </div>
                </div>
                <p className="description">An alt/classic rock supergroup, Them Crooked Vultures feature 's guitarist and vocalist , /'  on drums, and 's  on bass. The trio first discussed collaborating in 2005, but not much more was heard of the project until summer 2009, when Them Crooked Vultures announced that they had been recording an album in Los Angeles. The band made its live debut at Chicago's Cabaret Metro after that year's Lollapalooza Festival closed, adding auxiliary Vulture and longtime  collaborator  on rhythm guitar and keyboards. The show's set list was made up of grungy, hard-hitting rock with prog rock leanings, including the song "Nobody Loves Me and Neither Do I," which the band posted a brief clip of on its YouTube channel the week after its inaugural gig. The band spent the rest of the summer on the festival circuit, then issued its self-titled debut that fall. ~ Heather Phares, Rovi</p>
                <div>
                    <h4>Rock</h4>
                    {/* <img className="play" src="./src/assets/play-circle-fill.svg"></img> */}
                    <iframe className="spotifyPreview" src="https://open.spotify.com/embed/track/5ByJlcDmUzK69tpub789AB?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </>
    )
}

export default ArtistTile