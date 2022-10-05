import Slider from "./Slider"
import "./Container.css"
import AcercaDe from "./about/AcercaDe.jsx"

export default function Spanish(){
    return (
      <div>
        <h1>¡Hola! soy STEVEN</h1>
        <div>
          <AcercaDe />
        </div>
        <div className="contenedor">
          <h3>Proyectos en los que he participado</h3>
          <div className="contenedor">
            <label>Clickcare:</label>
            <p>plataforma poder solicitar servicios de cuidados y/o atención a personas de tercera edad, acompañamiento en recuperación, entre otros cuidados de salud</p>
            <iframe src="https://www.youtube.com/embed/WVXgthJPaV0" frameborder="0" title="Presentacion Clickcare" />
          </div>
          <div className="contenedor">
            <label>VideoGames</label>
            <p>Aunque se tenga diferentes páginas para poder acceder a la información de diferentes videojuegos, con esta página podremos observar de una manera más sencilla estos datos</p>
            <Slider />
          </div>
        </div>
      </div>
    )
  }