import React, { useState, useEffect } from "react";
import './Timer.css';

const Timer = () => {
  const [totalSegundos, setTotalSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTotalSegundos(prev => prev + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  let display;

  if (totalSegundos < 60) {

    display = <p>{totalSegundos}s</p>;
  } else if (totalSegundos < 3600) {

    const minutos = Math.floor(totalSegundos / 60);
    const segundos = totalSegundos % 60;
    display = <p>{minutos}m : {segundos}s</p>;
  } else {

    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;
    display = <p>{horas}h : {minutos}m : {segundos}s</p>;
  }

  return (
    <div className="timer">
      {display}
    </div>
  );
}

export default Timer;
