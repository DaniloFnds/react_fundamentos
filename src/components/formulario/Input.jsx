import React, {useState} from 'react'

export default props => {

    const [valor, setValor] = useState();

    function handlerValor(e) {
        setValor(e.target.value)
    }

    return (
        <div>
            <div>
                {valor}
            </div>
            <input value={valor} onChange={handlerValor}/>
            {/*se colocar o readOnly vai informar ao react q esse elemento nao sera controlado, entao nao precisa de um onChange, e so ira msotrar o valor*/}
            <input value={valor} readOnly/>
            {/*se colocar o undefined, informa ao react q esse campo nao sera controlado*/}
            <input value={undefined}/>

        </div>
    );
}
