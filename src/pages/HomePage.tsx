import React from 'react'
import { Container, Button, Stack} from '@mui/material';
import {HeaderComponent, CheckCategory } from '../components';

export const HomePage: React.FC<{}> = () => {
  return (
    <>
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
        <Container sx={{ mt: 0,  padding: 0}} maxWidth="xl">
            <CheckCategory /> 
        </Container>
    </>
      
  )
};