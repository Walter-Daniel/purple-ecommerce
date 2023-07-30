import { Container, Button, Grid, Typography } from '@mui/material';
import { AdminLayout } from '../../common/AdminLayout';

import { TableComponent } from '../../components/crud/Table';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { ModalProducts } from '../../components/crud/Products/ModalComponent';

export const ProductsPage = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth='xl'>
        <AdminLayout>
          <>
          <Grid container direction='row' justifyContent='space-between'>
            <Grid item><Typography variant='h5' fontWeight='bold'>Products</Typography></Grid>
            <Grid item><Button variant='contained' startIcon={<AddIcon />} color='secondary' style={{ marginBottom:'1rem' }} onClick={handleOpen}>Crear Producto</Button></Grid>
          </Grid>
            <ModalProducts open={open} handleClose={handleClose} />
            <TableComponent />
          </>
        </AdminLayout>
    </Container>
  )
}
