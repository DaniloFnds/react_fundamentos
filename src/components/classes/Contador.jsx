import React from 'react'
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

class Contador extends React.Component {
    state = {
        numero: this.props.numeroInicial || 0, passo: this.props.passoInicial || 5,
    }

    /* constructor(props) {
         super(props);
         //essa é forma para passar essa funcao para o escopo atual da class #37
         // this.increment = this.increment.bind(this)
     }*/

    //para resolver a questao de conseguir atualizar o compoentn e conseguri usar o this dentro do compoent, é usar uma funcao arrow
    //aqui seria criar um increment recebe uma funcao () =>
    increment = () => {
        console.log('asdas')
        //a forma de atualizar o estado do component é chamado o setState
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    setPasso = (e) => {
        console.log(e)
        this.setState({
            passo: e
        })
    }

    render() {
        return (<div>
            <h2>Contador</h2>
            <Display numero={this.state.numero}></Display>
            <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
            <Botoes incrementar={this.increment}></Botoes>
            {/*outra forma de chamar o metodo é passar uma arrow funciton*/}
            {/*<button onClick={_ => this.increment()}>++</button>*/}
        </div>);
    }
}

export default Contador


