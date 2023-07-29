import { Container, Button } from '@mui/material';
import { AdminLayout } from '../../common/AdminLayout';

import { TableComponent } from '../../components/crud/Table';

export const AdministrationPage = () => {
  return (
    <Container maxWidth='xl'>
        <AdminLayout>
          <>
          <h2>Products</h2>
            <Button variant='contained' style={{ marginBottom:'1rem' }}>Crear Producto</Button>
            <TableComponent />
          </>
        </AdminLayout>
    </Container>
  )
}
