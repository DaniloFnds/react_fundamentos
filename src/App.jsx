import React from 'react'

//como importar um css
import './index.css'

//importar um component
import Fragmento from "./components/basicos/Fragmento";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";

//podemos colocar o underline dizendo q nao vai poassar nada como parametros
//ou colocar default ()
export default () => {
    return (
        <div>
            <NumeroAleatorio min={1} max={10}/>
            <h1>Fundamentos React 2</h1>
            <Fragmento/>
        </div>
    );
}
