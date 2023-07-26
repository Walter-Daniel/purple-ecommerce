import React from 'react'
import { Container, Button, Stack} from '@mui/material';
import {HeaderComponent, CheckCategory } from '../components';

export const HomePage: React.FC<{}> = () => {
  return (
    <>
        <HeaderComponent 
                title='Valkyria'
                description='Indumentaria femenina'
                element={
                  <Stack spacing={2} direction='row'>
                    <Button variant='contained'color='secondary'>Promociones</Button>
                    <Button variant='contained'>Ir al contenido</Button>
                  </Stack>
                }
              />
        <Container sx={{ mt: 0,  padding: 0}} maxWidth="xl">
            <CheckCategory /> 
        </Container>
    </>
      
  )
};