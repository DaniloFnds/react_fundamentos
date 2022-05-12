import ReactDom from 'react-dom'
import React from 'react'

//como importar um css
import './index.css'

//importar um component
import App from './App'

//para funcionar um html dentro do react precisamos importar o react
// ReactDom.render(<div>Ola react</div>,
//     document.getElementById('root'))

//colocando o component para ser renderizado
// ReactDom.render(<div><Primeiro></Primeiro></div>, document.getElementById('root'))


//passando parametros para um component
ReactDom.render(<App/>, document.getElementById('root'))
