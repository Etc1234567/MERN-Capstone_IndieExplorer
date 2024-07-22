import Nav from "../components/Nav"

function AboutUs() {
    return (
        <>
            <Nav />
            <div className="container">

                <h1 className="pageHead about">About Us:</h1>
            <div className="aboutUsContent">
                <p>IndieExplorer is a site where local bands and artists are featured so community members can explore the local music scene and find new bands to enjoy. We feature local artists with 100,000 or less followers in a city guide where users can conveniently browse multiple bands in one place. </p>
            </div>
            <div className="faq">
                <h2>FAQs:</h2>
                <ol>
                    <li>How do you select which cities and artists to feature?: 
                        <p>We depend on our featured users (folks familiar with the local music scene, such as radio hosts, venue owners or local guides) to curate city guides for us by reviewing user submissions of bands (which are approved if they meet our criteria and are currently active). Don't see your city featured? Consider becoming a local guide!</p> </li>
                    <li>How do I become a local guide?:
                        <p>Contact our team if you are interested in becoming a local guide. Have your short list ready of bands you'd like to feature for your community and we will check it out!</p>
                    </li>
                    <li>What are the requirements a band must meet to be featured?:
                        <p>The band must have less than 100,000 followers, they must be local to the community they are being added to and they must be on Spotify. The more information the band has available online (such as photos, music samples, etc.) the more likely they are to be featured! </p>
                    </li>
                    <li>I don't see my favorite band featured!: 
                        <p>Request to have them added! At the top of the page, click the pink plus button icon (<img src="./src/assets/plus-circle-fill.svg"></img>) and paste the Spotify link of your band.</p>
                    </li>
                </ol>
                <p>For any additional questions not answered here: <button className="btn btn-light">contact our team!</button></p>
            </div>
            </div>
        </>
    )
}

export default AboutUs
