import React from 'react'
import { Container, Button } from '@mui/material';

export const RegisterPage: React.FC<{}> = () => {
  return (
      <Container sx={{ mt: 9 }} maxWidth="xl">
        <Button variant='contained'>Hola desde Register</Button>
      </Container>
  )
}