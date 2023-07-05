import React from 'react'
import { useFetch } from '../api/base.api';
import { Container, Button, Stack, Grid, Typography, CircularProgress} from '@mui/material';
import { CardComponent, HeaderComponent } from '../components';

export const HomePage: React.FC<{}> = () => {

  const { productsFilter, loading, error } = useFetch('https://fakestoreapi.com/products')
  
  return (
      <Container sx={{ mt: 3 }} maxWidth="xl">
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
          <Grid container sx={{ mt:3 }}>
            {error && 
              <Grid item textAlign='center'>
                <Typography variant='h3'>Se ha producido un error al cargar los productos</Typography>
              </Grid>
            }
            {
              loading &&
              <Grid item justifyContent='center' sx={{ width: '100%' }}>
                <CircularProgress color="secondary" />
              </Grid>
            }
            {
              productsFilter?.map(product => (               
                <Grid item xs={3} key={product.id}>
                  <CardComponent  
                      title={product.title} 
                      description={product.description}
                      price={product.price}
                      img={product.image}
                  />
                </Grid>
              ))
            }
          </Grid>
      </Container>
  )
}