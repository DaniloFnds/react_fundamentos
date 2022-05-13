import React from 'react'
import './Card.css'

export default (props) => {
    const cardStyle = {
        backgroundColor: props.color || '#F00', //caso nao venha a prpriedade coloca um default
        borderColor: props.color || '#F00',
    }
    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            {/*forma de receber componenets dentro de um compoennet, chamando o children*/}
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}
