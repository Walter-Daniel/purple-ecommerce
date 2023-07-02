import React from 'react'
import { Container, Button } from '@mui/material';
import { useNotification } from '../context/notification.context';



export const HomePage: React.FC<{}> = () => {

  const { getError } = useNotification();
  const handleClick = () => {

    getError("Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  }

  return (
      <Container sx={{ mt: 9 }} maxWidth="xl">
        <Button variant='contained' onClick={handleClick}>Hola desde Inicio</Button>
      </Container>
  )
}