import React from "react";

import { ContainerItens as Pages } from './styles'

function pagesItens({ children, isBlur }) {

    return <Pages isBlur={isBlur}>{children}</Pages>
}

export default pagesItens