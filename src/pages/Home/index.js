import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Peolple from '../../assests/people.svg'
import Arrow from '../../assests/arrow.svg'
import H1 from '../../components/Titles'
import ContainerItens from '../../components/pagesitens'


import { Container, Button, Input, InputLabel, Imagen } from './styles'

//JSX
const App = () => {

  const [users, setUsers] = useState([]);
  const navegate = useNavigate();

  const inputName = useRef()
  const inputAge = useRef()


  async function addNewUser() {

    const { data: newUsers } = await axios.post('http://localhost:3001/users', { name: inputName.current.value, age: inputAge.current.value });


    setUsers([...users, newUsers])

    navegate('/usuarios')

  }

  return (
    <Container>
      <Imagen alt='Logo-imagem' src={Peolple} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />

        <Button to='/usuarios' onClick={addNewUser}>Cadastrar <img alt='Seta' src={Arrow} /></Button>


      </ContainerItens>
    </Container>)
}

export default App