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
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProduto from "./components/repeticao/TabelaProduto";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import IndiretaPai from "./components/comunicao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/classes/Contador";

//podemos colocar o underline dizendo q nao vai poassar nada como parametros
//ou colocar default ()
export default () => {
    return (
        <div>
            <Card>
                <Contador numeroInicial={10}></Contador>
            </Card>
            <Card>
                <Input/>
            </Card>
            <Card>
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card>
                <UsuarioInfo usuario={{nome: "Danilo"}}></UsuarioInfo>
                <UsuarioInfo usuario={{email: "dasda"}}></UsuarioInfo>
                <UsuarioInfo></UsuarioInfo>
            </Card>
            <Card>
                <ParOuImpar numero={10}/>
            </Card>
            <Card>
                <TabelaProduto/>
            </Card>
            <Card>
                <ListaAlunos/>
            </Card>

            <Card titulo="Desafio Aleatorio" color={"#090"}>
                <Familia sobrenome={"Ferreira"}>
                    <FamiliaMembro/>
                </Familia>
            </Card>
            <Card titulo="Desafio Aleatorio" color={"#090"}>
                <NumeroAleatorio min={1} max={10}/>
            </Card>
            <h1>Fundamentos React 2</h1>
            <Fragmento/>
        </div>
    );
}
