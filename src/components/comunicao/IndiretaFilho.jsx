import React from 'react'

export default props => {
    const idade = Math.random()
    return (
        <div>
            <div>Filho</div>
            <button onClick={(e) => props.qdClicar("Danil", idade)}>Fornecer Informacoes</button>
        </div>
    );
}
