import React from 'react'
import { Container, Button } from '@mui/material';


export const HomePage: React.FC<{}> = () => {

  const handleClick = () => {

  }

  return (
      <Container sx={{ mt: 9 }} maxWidth="xl">
        <Button variant='contained' onClick={handleClick}>Hola desde Inicio</Button>
      </Container>
  )
}