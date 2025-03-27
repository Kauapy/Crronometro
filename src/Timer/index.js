import React, { useState, useEffect } from "react";
import './Timer.css';

const Timer = () => {
  const [totalSegundos, setTotalSegundos] = useState(0);
  const [intervalo, setIntervalo] = useState(null);

  const iniciarCronometro = () => {
    if(!intervalo){
        const novoIntervalo = setInterval(() => {
            setTotalSegundos((totalSegundos) => totalSegundos + 1);
        },1000);
        setIntervalo(novoIntervalo);
    }
  }

  const pararCronometro = () =>{
      if(intervalo){
          clearInterval(intervalo);
          setIntervalo(null); 
      }
  }


  const resetarCronometro = () => {
    setTotalSegundos(0);
    clearInterval(intervalo);
  }
  useEffect(() => {
    

    return () => clearInterval(intervalo);
  }, []);

  let display;

  if (totalSegundos < 60) {

    display = <p className="temporizador">{totalSegundos}s</p>;
  } else if (totalSegundos < 3600) {

    const minutos = Math.floor(totalSegundos / 60);
    const segundos = totalSegundos % 60;
    display = <p className="temporizador">{minutos}m : {segundos}s</p>;
  } else {

    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;
    display = <p className="temporizador">{horas}h : {minutos}m : {segundos}s</p>;
  }


  return (
      <div className="container">
        <div className="Botoes">
          {display}
        </div>

          <div className="naosei">
            <button className='botao' onClick={iniciarCronometro}>Play</button>
            <button className='botao' onClick={pararCronometro}>Pause</button>
            <button className="botao" onClick={resetarCronometro}>Resetar</button>
          </div>
      </div>
    
  );
}

export default Timer;
