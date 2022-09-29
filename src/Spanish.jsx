import "./English.css"
import Slider from "./Slider"

export default function Spanish(){
    return (
      <div>
        <h1>¡Hola! soy STEVEN</h1>
        <div>
          <label>Clickcare:</label>
          <iframe src="https://www.youtube.com/embed/WVXgthJPaV0" frameborder="0" title="Presentacion Clickcare" />
        </div>
        <div>
          <label>VideoGames</label>
          <Slider />
        </div>
      </div>
    )
  }