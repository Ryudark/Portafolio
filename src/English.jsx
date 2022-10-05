import AboutMe from "./about/AboutMe.jsx";
import Slider from "./Slider";


export default function English(){
    
    return (
    <div>
        <h1>Hi! I'M STEVEN</h1>
        <div>
            <AboutMe />
        </div>
        <div className="contenedor">
            <h2>Projects in which I have participated</h2>
            <div className="contenedor">
                <label>Clickcare:</label>
                <p>platform to request care and/or care services for the elderly, accompaniment in recovery, among other health care</p>
                <iframe src="https://www.youtube.com/embed/WVXgthJPaV0" frameborder="0" title="Presentacion Clickcare" />
            </div>
            <div className="contenedor">
                <label>VideoGames</label>
                <p>Although there are different pages to be able to access the information of different video games, with this page we will be able to observe this data in a simpler way</p>
                <Slider />
            </div>
        </div>
    </div>
    )
}