import React from 'react'
import produtos from "../../data/produto";

export default (props) => {

    function getLinhas() {
        return produtos.map(produto => {
            return (<tr>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco.toFixed(2)}</td>
            </tr>)
        })
    }

    return (<div>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Preco</th>
            </tr>
            </thead>

            <tbody>
            {getLinhas()}
            </tbody>
        </table>
    </div>);
}
