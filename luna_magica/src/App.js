import './App.css';
import React, {useState} from "react";
import signosJson from './signos.json';
import SignoCorrespondiente from './Horoscopo';

function App() {

  let signos = signosJson;

  {/*---------------------------------------------- Defino los useState a utilizar ------------------------------------------  */ }

  const [nombre, setNombre] = useState();
  const [edad, setEdad] = useState();
  const [genero, setGenero] = useState();
  const [dia, setDia] = useState();
  const [mes, setMes] = useState();
  const [año, setAño] = useState();
  const [signo, setSigno] = useState();

  {/*---------------------------------------------- Funciones de los eventos -----------------------------------------------------  */ }

  const calcularSigno = function (){
    if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4))
      setSigno ("Aries");
    if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5))
      setSigno ("Tauro");
    if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6))
      setSigno ("Geminis");
    if ((dia >= 22 && mes == 6) || (dia <= 22 && mes == 7))
      setSigno ("Cancer");
    if ((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8))
      setSigno ("Leo");
    if ((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9))
      setSigno ("Virgo");
    if ((dia >= 23 && mes == 9) || (dia <= 23 && mes == 10))
      setSigno ("Libra");
    if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11))
      setSigno ("Escorpio");
    if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12))
      setSigno ("Sagitario");
    if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1))
      setSigno ("Capricornio");
    if ((dia >= 21 && mes == 1) || (dia <= 20 && mes == 2))
      setSigno ("Acuario");
    if ((dia >= 21 && mes == 2) || (dia <= 20 && mes == 3))
      setSigno ("Piscis");
  }

  const nombreDelConsultatnte = function (e){
    setNombre (e.target.value);
  }

  const edadDelConsultatnte = function (e){
    setEdad (e.target.value);
  }

  const generoDelConsultante = function (e){
    setGenero (e.target.value);
  }
  
  const diaDelConsultante = function (e){
    setDia (e.target.value);
  }
  
  const mesDelConsultante = function (e){
    setMes (e.target.value);
  }
  
  const añoDelConsultante = function (e){
    setAño (e.target.value);
  }

  {/*---------------------------------------------- Contenido principal de la app -----------------------------------------------------  */ }

  return (

    <div className="App">

      <h1>Luna Mágica</h1>
      <h2>¡Consulta tu horoscopo online!</h2>
      <h3>Por favor, completa el siguiente formulario:</h3>

      <div className='contenedor1'>
      <h4>Nombre:</h4>
      <input onChange={nombreDelConsultatnte}type="text" placeholder="tu nombre completo..."></input>

      <h4>Edad:</h4>
      <input onChange={edadDelConsultatnte}type="number" placeholder="tu edad..." step="1"></input>
      
      <h4>Genero:</h4>
      <select onChange={generoDelConsultante}>

        <option>Selcciona un genero</option>
        <option>Hombre</option>
        <option>Mujer</option>
        <option>No binario</option>

      </select>
      </div>

      <h3>Introdusca su fecha de nacimiento:</h3>
      <div className='contenedor1'>
      <h4>Día:</h4>
      <input onChange={diaDelConsultante} type="number"  step="1" max="31" min= "1"></input>
      
      <h4>Mes:</h4>
      <input onChange={mesDelConsultante} type="number"  step="1" max="12" min= "1"></input>
      
      <h4>Año:</h4>
      <input onChange={añoDelConsultante} type="number"  step="1"></input>
      </div>

      <br></br>
      <br></br>

     
      <button type="button" onClick={calcularSigno}> Consultar Horoscopo </button>
                    

      
      {signos.map((signos) => {
        if ((signos.titulo == signo) && (signos.genero == genero)) return <SignoCorrespondiente titulo={signos.titulo} img={signos.img} descripcion={signos.descripcion} elemento={signos.elemento} cualidad={signos.cualidad} color={signos.color} día={signos.día} regente={signos.regente}
        compativilidad={signos.compativilidad} pareja={signos.pareja} numero={signos.numero} nacimiento={signos.nacimiento} caracteristicas={signos.caracteristicas} palabra2022={signos.palabra2022} salud={signos.salud}
        dinero={signos.dinero} amor={signos.amor} dia={dia}>
        </SignoCorrespondiente>
      }
      )}
      
    </div>
  );
}

export default App;
