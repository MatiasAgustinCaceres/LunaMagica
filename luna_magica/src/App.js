import './App.css';
import React, {useState} from "react";
import signosJson from './signos.json';
import SignoCorrespondiente from './Horoscopo';

function App() {

  let signos = signosJson;

  const [nombre, setNombre] = useState();
  const [edad, setEdad] = useState();
  const [genero, setGenero] = useState();
  const [dia, setDia] = useState();
  const [mes, setMes] = useState();
  const [año, setAño] = useState();
  const [signo, setSigno] = useState();


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


  return (
    <div className="App">
      <h1>Luna Magica</h1>
      <h2>Tirada de cartas online</h2>
      <h2>Por favor, completa el siguiente formulario.</h2>
      
      <h3>Nombre:</h3>
      <input onChange={nombreDelConsultatnte}type="text" placeholder="tu nombre completo..."></input>


      <h3>Edad:</h3>
      <input onChange={edadDelConsultatnte}type="number" placeholder="tu edad..." step="1"></input>
      

      <h3>Genero:</h3>
      <select onChange={generoDelConsultante}>
        <option>Selcciones un genero</option>
        <option>Hombre</option>
        <option>Mujer</option>
      </select>

      <h3>Introdusca su fecha de nacimiento</h3>
      <h3>Día:</h3>
      <input onChange={diaDelConsultante} type="number"  step="1" max="31"></input>
      
      <h3>Mes:</h3>
      <input onChange={mesDelConsultante} type="number"  step="1" max="12"></input>
      
      <h3>Año:</h3>
      <input onChange={añoDelConsultante} type="number"  step="1"></input>
      

      <br></br>
      <br></br>

     
      <button type="button" onClick={calcularSigno}> Consultar Horoscopo </button>
                    

      
      {signos.map((signos) => {
        if (signos.titulo == signo) return <SignoCorrespondiente titulo={signos.titulo} descripcion={signos.descripcion} elemento={signos.elemento} cualidad={signos.cualidad} color={signos.color} día={signos.día} regente={signos.regente}
        compativilidad={signos.compativilidad} pareja={signos.pareja} numero={signos.numero} nacimiento={signos.nacimiento} caracteristicas={signos.caracteristicas} palabra2022={signos.palabra2022} salud={signos.salud}
        dinero={signos.dinero} amor={signos.amor}>
        </SignoCorrespondiente>
      }
      )}
      
    </div>
  );
}

export default App;
