import React from 'react';
import If from "./If";

const UsuarioInfo = (props) => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo {usuario.nome}
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem vindo Amigao
            </If>
        </div>
    );
};

export default UsuarioInfo;
