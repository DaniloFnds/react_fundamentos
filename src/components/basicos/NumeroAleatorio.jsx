import React from 'react'

export default function NumeroAleatorio(props) {
    //utilizando o destruct
    const [a, b] = [1, 2] // estou fazendo um destruct de um arra para outro array colocando nas ref a e b

    const {c, d} = {c: 12, d: 45, x: "teste"}//aqui faz o destruct d eum objeto, esperando q o objeto tenha o nome de referencia C e D

    const {min, max} = props;
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min)

    return (
        <>
            <h2>Numero aleatorio: {numeroAleatorio}</h2>
        </>
    );
}
