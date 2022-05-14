import React from 'react'

class Contador extends React.Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    /* constructor(props) {
         super(props);
         //essa é forma para passar essa funcao para o escopo atual da class #37
         // this.increment = this.increment.bind(this)
     }*/

    //para resolver a questao de conseguir atualizar o compoentn e conseguri usar o this dentro do compoent, é usar uma funcao arrow
    //aqui seria criar um increment recebe uma funcao () =>
    increment = () => {
        //a forma de atualizar o estado do component é chamado o setState
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    handleChange = (e) => {
        this.setState({
            passo: Number(e.target.value)
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <p>{this.state.numero}</p>
                <input type="text" value={this.state.passo} onChange={this.handleChange}/>
                <button onClick={this.increment}>+</button>
                {/*outra forma de chamar o metodo é passar uma arrow funciton*/}
                {/*<button onClick={_ => this.increment()}>++</button>*/}
            </div>
        );
    }
}

export default Contador


