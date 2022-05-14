import React, {useState} from 'react'
import IndiretaFilho from "./IndiretaFilho";

export default props => {

    //o hooks vai servir para toda vez q o component filhjo atualizar os dados e propagar para o parent, ele vai chamar a funcao e alterar o valor
    //curso : 35 - Component com Estado
    const [nome, setNome] = useState('n/a') //o useState é um hooks, ele retorna um array q na primeira posicao o valor em si, e os egundo é uma funcao para alterar esse valor
    const [idade, setIdade] = useState(0) //o useState é um hooks, ele retorna um array q na primeira posicao o valor em si, e os egundo é uma funcao para alterar esse valor


    function fornecerInformacoesAoPai(nome, idade) {
        setNome(nome)
        setIdade(idade)
    }

    return (
        <div>
            <div>Nome Pai {nome}</div>
            <div>Idade Pai {idade}</div>
            <IndiretaFilho qdClicar={fornecerInformacoesAoPai}></IndiretaFilho>
        </div>
    );
}
