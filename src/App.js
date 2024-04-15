import React, { useState, useRef } from "react";
import axios from "axios";
import Peolple from './assests/people.svg'
import Arrow from './assests/arrow.svg'
import Trash from './assests/trash.svg'

import { Container, H1, Button, Input, InputLabel, ContainerItens, Imagen, User } from './styles'

//JSX
const App = () => {

  const [users, setUsers] = useState([]);

  const inputName = useRef()
  const inputAge = useRef()


  async function addNewUser() {

    // const { data: newUsers } = await axios.post('http://localhost:3001/users', { name: inputName.current.value, age: inputAge.current.value});

    
    // setUsers([...users, newUsers])
    const { data: newUsers } = await axios.get("http://localhost:3001/users")

    setUsers(newUsers)

  };

  function deleteUser(userId) {
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
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

        <Button onClick={addNewUser}>Cadastrar <img alt='Seta' src={Arrow} /></Button>

        <ul>
          {
            users.map((user) => (
              <User key={user.id}>
                <p> {user.name}</p> <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)}><img alt="Lixeira(trash)" src={Trash} /></button>
              </User>
            ))

          }
        </ul>
      </ContainerItens>
    </Container>)
}

export default App