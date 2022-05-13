import React from 'react'
import './App.css'
//como importar um css
import './index.css'

//importar um component
import Fragmento from "./components/basicos/Fragmento";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";

//podemos colocar o underline dizendo q nao vai poassar nada como parametros
//ou colocar default ()
export default () => {
    return (
        <div>
            <Card titulo="Desafio Aleatorio" color={"#090"}>
                <Familia sobrenome={"Ferreira"}></Familia>
                <FamiliaMembro/>
            </Card>
            <Card titulo="Desafio Aleatorio" color={"#090"}>
                <NumeroAleatorio min={1} max={10}/>
            </Card>
            <h1>Fundamentos React 2</h1>
            <Fragmento/>
        </div>
    );
}
