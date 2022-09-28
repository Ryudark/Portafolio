import portada from "./images/Portada1.JPG"
import detail from "./images/gameDetail.JPG"
import create from "./images/create.JPG"
import page from "./images/Page1.JPG"
import "./English.css"

export default function English(){
    return (
    <div>
        <h1>Hi! I'M STEVEN</h1>
        <div>
            <label>Clickcare:</label>
            <iframe src="https://www.youtube.com/embed/WVXgthJPaV0" frameborder="0" title="Presentacion Clickcare" />
            </div>
            <div>
            <label>VideoGames</label>
            <img src={portada} alt="portada" className="image"/>
            <img src={detail} alt="detail" className="image"/>
            <img src={create} alt="create" className="image"/>
            <img src={page} alt="page" className="image"/>
        </div>
    </div>
    )
}