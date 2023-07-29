import { Container, Typography, Button } from '@mui/material';
import { AdminLayout } from '../../common/AdminLayout';
import { ProductsComponent } from '../../components/crud/ProductsComponent';
import { TableComponent } from '../../components/crud/Table';

export const AdministrationPage = () => {
    const title = 'Productos'
  return (
    <Container maxWidth='xl'>
        <AdminLayout title={title}>
          <>
            <Button variant='contained' style={{ marginBottom:'1rem' }}>Crear Producto</Button>
            <TableComponent />
          </>
        </AdminLayout>
    </Container>
  )
}
