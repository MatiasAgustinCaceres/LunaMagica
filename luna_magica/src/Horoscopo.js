import html2canvas from 'html2canvas';

export default function SignoCorrespondiente (props){

    const archivoExportado = function (e){
      html2canvas(document.querySelector("#exportar")).then(canvas => {
        let img = canvas.toDataURL ("img/png");
        let link = document.createElement ('a');
        link.download = 'horoscopo.png';
        link.href = img;
        link.click();
    });
    }
  
    return (
      <div>
        <div id="exportar">
          <h1>{props.titulo}</h1>
          <p>Descripcion: {props.descripcion}</p>
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
        </div>
        <button onClick={archivoExportado} type = "button"> Descargar horoscopo </button>
  
      </div>
    )
  }