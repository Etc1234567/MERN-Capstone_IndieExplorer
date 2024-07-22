import ArtistTile from "../components/ArtistTile"
import AddBand from "./AddBand"
import Nav from "../components/Nav"

function Home() {
    return (
        <>
            <Nav />

            <div className="flex intro">
                <h3>Welcome to IndieExplorer! Check out some of the local artists below or start adding your own.</h3>
                <a href="#collapse" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapse"><img className="linkIcon" src="./src/assets/plus-circle-fill.svg" alt="add icon"></img></a>
            </div>
            <div className="collapse" id="collapse">
                <AddBand />
            </div>

            <h1 className="pageHead">Kansas City, Missouri</h1>

            <hr className="divider"></hr>
            <div className="artistTile flex">
                <div className="bandName">
                    <h3>Say That Again</h3>
                    <img className="bandPhoto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRR7QR1WKlDngp45oXXBqdSRWTmCGFtacpIQ&s" alt="band photo"></img>
                    <div className="flex links">
                        <a href="https://www.instagram.com/saythatagainkc/"><img className="linkIcon" src="./src/assets/instagram.svg" alt="instagram icon"></img></a>
                        <a href="https://www.facebook.com/SayThatAgainKC/"><img className="linkIcon" src="./src/assets/facebook.svg" alt="snapchat icon"></img></a>
                        <a href="https://open.spotify.com/artist/3O5vpR1l0itoYo4qAaQ0Of"><img className="linkIcon" src="./src/assets/spotify.svg" alt="spotify icon"></img></a>
                        <a href="https://www.youtube.com/channel/UCXpJXqaKg_D1UgqwAA3F6qw"><img className="linkIcon" src="./src/assets/youtube.svg" alt="youtube icon"></img></a>
                    </div>
                </div>
                <p className="description">Say That Again, comprised of members Carlos Nunez, Trecen Peeler, Will Kuenne, and Vinnie Cascone, formed by chance at the end of 2019 in Kansas City, Missouri. Their music is a fun blend of Alternative/Indie Rock and Bedroom Pop that'll get your toes tapping. Look forward to catchy hooks and upbeat tempos when listening to a Say That Again song. Say That Again released their debut EP "Flying Cars" in December of 2021 and just released their first full-length album, "Get Over It". Listen to "Get Over It" on all streaming platforms!</p>
                <div>
                    <h4>Alternative Rock</h4>
                    {/* <img className="play" src="./src/assets/play-circle-fill.svg"></img> */}
                    <iframe className="spotifyPreview" src="https://open.spotify.com/embed/track/3lWHvlNrZVFSc7sI6DvxQH?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
            <hr className="divider"></hr>

            <div className="artistTile flex">
                <div className="bandName">
                    <h3>Doglava</h3>
                    <img className="bandPhoto" src="https://static1.squarespace.com/static/559af0b3e4b0c25a8fabd035/64dfdf8105a6b577d3a14ecb/666b564ae6db3a43920df6fe/1718822943007/Plaza+Art+Fair+-+Doglava.jpg?format=1500w" alt="band photo"></img>
                    <div className="flex links">
                        <a href="#"><img className="linkIcon" src="./src/assets/instagram.svg" alt="instagram icon"></img></a>
                        <a href="#"><img className="linkIcon" src="./src/assets/snapchat.svg" alt="snapchat icon"></img></a>
                        <a href="#"><img className="linkIcon" src="./src/assets/spotify.svg" alt="spotify icon"></img></a>
                        <a href="#"><img className="linkIcon" src="./src/assets/youtube.svg" alt="youtube icon"></img></a>
                    </div>
                </div>
                <p className="description">Hot improv funk jams for dogs! But hoomans can listen too... Just some good boys and girls from Kansas City. Unprofessionally produced music from our kennel to yours.</p>
                <div>
                    <h4>Alternative Funk</h4>
                    {/* <img className="play" src="./src/assets/play-circle-fill.svg"></img> */}
                    <iframe className="spotifyPreview" src="https://open.spotify.com/embed/track/2LNawnq1nn70chdQUA5aH7?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>

            <ArtistTile />
        </>
    )
}

export default Home
