import React from 'react'
import alunos from "../../data/aluno";

export default (props) => {
    const lis = alunos.map(aluno => {
        return (
            /*sempre colocar esse key para maps*/
            <li key={aluno.id}>
                {aluno.id} {aluno.nome} -> {aluno.nota}
            </li>
        )
    })

    return (<>
        <ul>
            {lis}
        </ul>
    </>);
}
