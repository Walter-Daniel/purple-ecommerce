import { Grid, Typography } from '@mui/material';
import { FC } from 'react'
import { SideBar } from '../components/crud/SideBar';

interface AdminProps {
  title: string
  children: JSX.Element
}

export const AdminLayout: FC<AdminProps> = ({ title, children }) => {
  return (
    <>
        <Typography variant='h3'>{title}</Typography>
        <Grid container direction='row'>
            <Grid item xs={2} sx={{ bgcolor:'black', minHeight:'80vh' }}><SideBar /></Grid>
            <Grid item xs={10}>{children}</Grid>
        </Grid>
    </>
  )
}
