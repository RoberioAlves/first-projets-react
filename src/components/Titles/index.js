import React from "react";
import { H1 } from './styles'

function Title(props) {

    return <H1>{props.children}</H1> //posso colocar apenas o children que veio atravez do cosole.log dentro dos (crildren) na função e retirar o props dentro de H1 e deixar apenas o children.

}

export default Title