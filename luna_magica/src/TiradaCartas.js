export default function TiradaCartas (props){

    return(
        <div>

            <h1>{props.titulo}</h1>
            <img src={`/imgs/${props.img}.jpg`} />
            <p>Futuro: {props.futuro}</p>
            <p>Presente: {props.presente}</p>
            <p>Pasado: {props.pasado}</p>

        </div>
    )

}