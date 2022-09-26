import logo from './logo.svg';
import './App.css';
import English from "./English"
import Spanish from "./Spanish"
import { useState } from 'react';

import Eng from "./images/English.jpg"
import Esp from "./images/Español.jpg"

function App() {

  let [lenguage, setLenguage]=new useState();

  function changeLanguage(c){
    setLenguage(c)
  }

  return (
    <div>
      <button onClick={()=>changeLanguage(1)}><img src={Eng} className="imgFlag"/></button>
      <button onClick={()=>changeLanguage(2)}><img src={Esp} className="imgFlag"/></button>
      <title>Steven Jaimes Galeano</title>
      {
        lenguage===1? <English /> : <Spanish />
      }
    </div>
  );
}

export default App;
