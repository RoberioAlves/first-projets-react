import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from '../../assests/avatar.svg'
import Arrow from '../../assests/arrow.svg'
import Trash from '../../assests/trash.svg'

import { Container, H1, Button, ContainerItens, Imagen, User } from './styles'

//JSX
const Users = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchsers(){
      const { data: newUsers }  = await axios.get("http://localhost:3001/users");

    setUsers(newUsers);
    }
  
    fetchsers()

  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId);
    setUsers(newUsers)
  }

  return (
    <Container>
      <Imagen alt='Logo-imagem' src={Avatar} />
      <ContainerItens>
        <H1>Usuários</H1>

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

        <Button > <img alt='Seta' src={Arrow}/> Voltar </Button>
        
      </ContainerItens>
    </Container>)
}

export default Users