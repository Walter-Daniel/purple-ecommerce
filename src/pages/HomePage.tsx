import React, { useEffect } from 'react'
import { Container, Button, Stack } from '@mui/material';
import { HeaderComponent } from '../components';
import { result } from '../api/base.api';

export const HomePage: React.FC<{}> = () => {

  useEffect(() => {
    result
  }, [])
  
  return (
      <Container sx={{ mt: 9 }} maxWidth="xl">
        <Container maxWidth="xl">
          <HeaderComponent 
            title='Bienvenidos a Purple Store'
            description='Aquí podrás encontrar lo último en moda para la temporada otoño/invierno 2023'
            element={
              <Stack spacing={2} direction='row'>
                <Button variant='contained'>Hola mundo</Button>
                <Button variant='outlined'>Hola pordos</Button>
              </Stack>
            }
          />
        </Container>
      </Container>
  )
}