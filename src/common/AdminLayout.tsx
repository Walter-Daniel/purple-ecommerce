import { Grid } from '@mui/material';
import { FC } from 'react'
import { SideBar } from '../components/crud/SideBar';
import { Navbar } from './Navbar';
import { Container } from '@mui/system';

interface AdminProps {
  children: JSX.Element
}

export const AdminLayout: FC<AdminProps> = ({ children }) => {
  return (
      <Container maxWidth='xl'>
          <Navbar />
          <Grid container direction='row'>
              <Grid item xs={2} ><SideBar /></Grid>
              <Grid item xs={10}>{children}</Grid>
          </Grid>
      </Container>
  )
}
