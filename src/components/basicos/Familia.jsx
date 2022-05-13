import Reacth, {cloneElement} from 'react'
import FamiliaMembro from "./FamiliaMembro";

export default (props) => {
    return <>
        <span>Familia</span>
        <FamiliaMembro nome={"Pedro"} sobrenome={props.sobrenome}/>
        <FamiliaMembro
            nome={"Ana"} {...props}/> {/*ou podemos utilizar o spread, q é passar todas props para o component filho*/}
        <FamiliaMembro nome={"Silva"} sobrenome={"Outro"}/>


        {props.children}

        {/*
        forma de clonar um e apenas um compoenent q esteja dentro do compoenets
        {cloneElement(props.children, {...props})}*/}
    </>
}


