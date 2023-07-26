import { Grid, Typography } from '@mui/material';
import { FC } from 'react'
import { TableComponent } from '../components/crud/Table';
import { SideBar } from '../components/crud/SideBar';

interface AdminProps{
    title: string
}

export const AdminLayout: FC<AdminProps> = ({title}) => {
  return (
    <>
        <Typography variant='h3'>{title}</Typography>
        <Grid container direction='row'>
            <Grid item xs={2} sx={{ bgcolor:'black', minHeight:'80vh' }}><SideBar /></Grid>
            <Grid item xs={10}><TableComponent /></Grid>
        </Grid>
    </>
  )
}
