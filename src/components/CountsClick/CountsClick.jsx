import React,{useState} from 'react';
import "./Count.css";

function CountsClick() {
  
  const [count, setCount] = useState(0);
  
  const contandoClicks = () => {
    setCount(contar + 1);
  }

  const handleReset = () => {
    setCount(0);
  }


  return (
    <div className="counter-container">
        <h1 className="counter">{count}</h1>
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