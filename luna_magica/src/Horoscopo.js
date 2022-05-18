import html2canvas from 'html2canvas';
import React, {useState} from "react";
import cartasJson from './cartas.json';
import TiradaCartas from './TiradaCartas';

export default function SignoCorrespondiente (props){

  let cartas = cartasJson;

  {/*---------------------------------------------- Defino los useState a utilizar ------------------------------------------  */ }

  const [id, setId] = useState();

  {/*---------------------------------------------- Funciones de los eventos -----------------------------------------------------  */ }

  const calcularId = function (){
    if (props.dia >= 1 && props.dia <= 8)
      setId ("Reversa");
    if (props.dia >= 9 && props.dia <= 16)
      setId ("+Cuatro");
    if (props.dia >= 17 && props.dia <= 24)
      setId ("Bloqueo");
    if (props.dia >= 24 && props.dia <= 31)
      setId ("Colores");
  }

  const archivoExportado = function (e){
    html2canvas(document.querySelector("#exportar")).then(canvas => {
      let img = canvas.toDataURL ("img/png");
      let link = document.createElement ('a');
      link.download = 'horoscopo.png';
      link.href = img;
      link.click();
  });
  }
  
  {/*---------------------------------------------- Contenido principal del componente -----------------------------------------------------  */ }

  return (

    <div>

      <div id="exportar">

        <h1>{props.titulo}</h1>
        <img src={`/imgs/${props.img}.jpg`} />
        <p>Descripción: {props.descripcion}</p>
        <p>Elemento: {props.elemento}</p>
        <p>Cualidades: {props.cualidad}</p>
        <p>Corlor: {props.color}</p>
        <p>Día: {props.día}</p>
        <p>Regente: {props.regente}</p>
        <p>Signo mas compatible: {props.compativilidad}</p>
        <p>Mejor pareja: {props.pareja}</p>
        <p>Nuemero de la suerte: {props.numero}</p>
        <p>Rango de nacimiento: {props.nacimiento}</p>
        <p>Caracteristicas: {props.caracteristicas}</p>
        <p>Palabra para todo el 2022: {props.palabra2022}</p>
        <p>Salud: {props.salud}</p>
        <p>Dinero: {props.dinero}</p>
        <p>Amor: {props.amor}</p>
        
        {cartas.map((cartas) => {
          if (cartas.id === id) return <TiradaCartas titulo={cartas.id} img={cartas.img} futuro={cartas.futuro} presente={cartas.presente} pasado={cartas.pasado}> </TiradaCartas>
        }
        )}

      </div>

      <button type="button" onClick={calcularId}> Tirar cartas </button>
      <button onClick={archivoExportado} type = "button"> Descargar horoscopo </button>
  
    </div>
  )
}