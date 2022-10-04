import Slider from "./Slider"
import "./Container.css"

export default function Spanish(){
    return (
      <div>
        <h1>¡Hola! soy STEVEN</h1>
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