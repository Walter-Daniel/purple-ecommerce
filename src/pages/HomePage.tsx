import React from 'react'
import { Container, Button, Stack} from '@mui/material';
import {HeaderComponent, CheckCategory } from '../components';

export const HomePage: React.FC<{}> = () => {
  return (
      <Container sx={{ mt: 15 }} maxWidth="xl">
          <HeaderComponent 
            title='Bienvenidos a Purple Store'
            description='Aquí podrás encontrar lo último en moda, joyería y tecnología.'
            element={
              <Stack spacing={2} direction='row'>
                <Button variant='contained'>Hola mundo</Button>
                <Button variant='outlined'>Hola pordos</Button>
              </Stack>
            }
          />
          <CheckCategory /> 
      </Container>
  )
}