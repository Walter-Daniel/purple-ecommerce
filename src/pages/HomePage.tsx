import React from 'react'
import { Container, Button, Stack, Grid, Typography, CircularProgress} from '@mui/material';
import { CardComponent, HeaderComponent } from '../components';
import { Category } from '../components/CheckCategory';
import { useContextProducts } from '../context/ProductsProvider';
export const HomePage: React.FC<{}> = () => {

  const { error, menCategory,womenCategory, loading } = useContextProducts();  

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
          <Category menCategory={menCategory} womenCategory={womenCategory} />
          <Grid container sx={{ mt:3, width:'100%' }} justifyContent='center'>
            {error && 
              <Grid item textAlign='center'>
                <Typography variant='h3'>Se ha producido un error al cargar los productos</Typography>
              </Grid>
            }
            {
              loading &&
              <Grid container justifyContent='center' direction='row'>
                <Grid item xs={1}>
                  <CircularProgress color="secondary"/>
                </Grid>
              </Grid>
            }
            {
              menCategory?.map(product => (               
                <Grid item xs={4} key={product.id} sx={{ mt: 4, width:'100%', display: 'flex', justifyContent:'center'}} >
                  <CardComponent  
                      title={product.title} 
                      description={product.description}
                      price={product.price}
                      img={product.image}
                  />
                </Grid>
              ))
            }
            {
              womenCategory?.map(product => (               
                <Grid item xs={4} key={product.id} sx={{ mt: 4, width:'100%', display: 'flex', justifyContent:'center'}} >
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