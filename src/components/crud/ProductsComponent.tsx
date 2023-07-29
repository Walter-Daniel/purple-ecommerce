import { AdminLayout } from '../../common/AdminLayout'
import { Button, Grid } from '@mui/material';
import { TableComponent } from './Table';

export const ProductsComponent = () => {
  return (
    <>
      <Grid container >
        <Grid item >
          <Button variant='contained' color='secondary'>Crear Producto</Button>
        </Grid>
      </Grid>
      <TableComponent />
    
    </>
    
  )
}
