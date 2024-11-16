import React,{useState} from 'react';
import "./Count.css";

function CountsClick() {
  
  const [contar, estamosContando] = useState(0);
  
  const contandoClicks = () => {
    estamosContando(contar + 1);
  }

  const handleReset = () => {
    estamosContando(0);
  }


  return (
    <div className="counter-container">
        <h1 className="counter">{contar}</h1>
        <button className="button count-button" onClick={contandoClicks}>
            Contar
        </button>
        <button className="button reset-button" onClick={handleReset}>
            Reiniciar
        </button>
    </div>
  )
}

export default CountsClick