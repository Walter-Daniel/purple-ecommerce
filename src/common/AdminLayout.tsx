import { Grid } from '@mui/material';
import { FC } from 'react'
import { SideBar } from '../components/crud/SideBar';
import { Container } from '@mui/system';

interface AdminProps {
  children: JSX.Element
}

export const AdminLayout: FC<AdminProps> = ({ children }) => {
  return (
      <Container maxWidth='xl'>
          <Grid container direction='row' mt={15}>
              <Grid item xs={2} ><SideBar /></Grid>
              <Grid item xs={10} paddingLeft={2}>{children}</Grid>
          </Grid>
      </Container>
  )
}
