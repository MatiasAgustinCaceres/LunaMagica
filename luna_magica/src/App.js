import './App.css';
import React, {useState} from "react";
import signosJson from './signos.json';

function SignoCorrespondiente (props){
  return (
    <div>
      <h1>{props.titulo}</h1>
      <p>{props.descripcion}</p>
      <p>{props.elemento}</p>
      <p>{props.cualidad}</p>
      <p>{props.color}</p>
      <p>{props.día}</p>
      <p>{props.regente}</p>
      <p>{props.compativilidad}</p>
      <p>{props.pareja}</p>
      <p>{props.numero}</p>
      <p>{props.nacimiento}</p>
      <p>{props.caracteristicas}</p>
      <p>{props.palabra2022}</p>
      <p>{props.salud}</p>
      <p>{props.dinero}</p>
      <p>{props.amor}</p>
    </div>
  )
}

function App() {

  let signos = signosJson;

  const [nombre, setNombre] = useState();
  const [edad, setEdad] = useState();
  const [genero, setGenero] = useState();
  const [fechaDeNacimiento, setFechaDeNacimiento] = useState();

  const nombreDelConsultatnte = function (e){
    setNombre (e.target.value);
  }

  const edadDelConsultatnte = function (e){
    setEdad (e.target.value);
  }

  const generoDelConsultante = function (e){
    setGenero (e.target.value);
  }

  const fechaDeNacimientoDelConsultatnte = function (e){
    setFechaDeNacimiento (e.target.value);
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
        <option>Hombre</option>
        <option>Mujer</option>
      </select>

      <h3>Fecha de nacimineto:</h3>
      <input onChange={fechaDeNacimientoDelConsultatnte}type="date" placeholder="tu fecha de nacimiento..."></input>

      <br></br>
      <br></br>

     
      <button type="button"> Realizar tirada. </button>


      <h4>{nombre}</h4>
      <h4>{edad}</h4>
      <h4>{genero}</h4>
      <h4>{fechaDeNacimiento}</h4>
                            

      {signos.map(signos => <SignoCorrespondiente titulo={signos.titulo} descripcion={signos.descripcion} elemento={signos.elemento} cualidad={signos.cualidad} color={signos.color} día={signos.día} regente={signos.regente}
                            compativilidad={signos.compativilidad} pareja={signos.pareja} numero={signos.numero} nacimiento={signos.nacimiento} caracteristicas={signos.caracteristicas} palabra2022={signos.palabra2022} salud={signos.salud}
                            dinero={signos.dinero} amor={signos.amor}>
                            </SignoCorrespondiente>
      )}
      
   


    </div>
  );
}

export default App;
