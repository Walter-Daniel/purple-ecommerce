import React, { useEffect } from 'react'
import { Container, Button, Stack, Grid, Typography, Box } from '@mui/material';
import { CardComponent, HeaderComponent } from '../components';
import { useState } from 'react';
import { TypeProducts } from '../types/products.interface';


export const HomePage: React.FC<{}> = () => {

  const [products, setProducts] = useState<TypeProducts[] | null >(null)
  useEffect(() => {
       fetch('https://fakestoreapi.com/products')
                    .then(res=>res.json())
                    .then(json=>setProducts(json))
                    .catch(Error)
  }, [])
  
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
          <Box>
            {
              (!products) ? 
                          <Typography variant='h5'>No se encontraron productos</Typography>
                          :
                          <Grid container sx={{ mt:3 }}>
                            {
                              products.map(product => (
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
            }
          </Box>
      </Container>
  )
}