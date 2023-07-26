import { Container, Typography } from '@mui/material';
import { AdminLayout } from '../common/AdminLayout';

export const AdministrationPage = () => {
    const title = 'Productos'
  return (
    <Container maxWidth='xl'>
        <Typography variant='h2'>Administracion</Typography>
        <AdminLayout title={title}/>
    </Container>
  )
}
