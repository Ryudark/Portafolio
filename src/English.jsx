import Slider from "./Slider";


export default function English(){
    
    return (
    <div>
        <h1>Hi! I'M STEVEN</h1>
        <div className="contenedor">
            <div className="contenedor">
                <label>Clickcare:</label>
                <iframe src="https://www.youtube.com/embed/WVXgthJPaV0" frameborder="0" title="Presentacion Clickcare" />
            </div>
            <div className="contenedor">
                <label>VideoGames</label>
                <Slider />
            </div>
        </div>
    </div>
    )
}