import React from 'react'
import { useState } from 'react'

import portada from "./images/Portada1.JPG"
import detail from "./images/gameDetail.JPG"
import create from "./images/create.JPG"
import page from "./images/Page1.JPG"
// import estilos from"./Slider.css"
import "./Slider.css"

function Slider() {

    const [imagenActual, setImagenActual]= new useState(0)
    const images =[ portada, detail, create, page]

    const cantidad = images?.length

    if(!Array.isArray(images)|| cantidad===0) return

    function beforeImage(){
        setImagenActual(imagenActual === 0 ? cantidad-1 :imagenActual-1)
    }
    function nextImage(){
        setImagenActual(imagenActual === cantidad-1 ? 0: imagenActual+1)
    }

    return (
        <div className='container'>
            <button onClick={beforeImage}>🠔</button>
            {images.map((img, index)=>{
                return(
                    <div className={imagenActual ===index ? "slide active": "slide"}>
                        {imagenActual ===index && (
                            <img key={index} src={img} alt={img} className="image"/>)}
                    </div>
                    )}
                )
            } 
            <button onClick={nextImage}>🠖</button>
        </div>
    )
}

export default Slider