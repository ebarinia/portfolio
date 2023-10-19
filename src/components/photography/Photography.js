import "./Photography.css"

const Photography = () => {
    return ( 
        <div className="photography">
        <div className="text">
        <h1>Wedding Photography</h1>
        <p>When I'm not coding, you can usually find me behind a camera in and out of town. Photography (film & digital) has been a hobby of mine for several years now. My wife and I created our wedding photography business during Covid lockdown - initially to help out people (like us) that were left-out without a photographer for their special day. This slowly flourished into a profitable venture for us, which we still love and do to this day!</p>
        <p>You can view my work on Instagram <a href="https://www.instagram.com/barinia_studio/" target="_blank" rel="noreferrer">here</a></p>
        </div>
        <img className="ring" src={require("../../images/photography.jpg")} alt="rings" />
        </div>
    );
}
 
export default Photography;