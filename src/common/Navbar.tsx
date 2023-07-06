import React from 'react';
import { AppBar, Box, Toolbar, Container, Grid, Button, Typography, Stack } from '@mui/material';
import Logo from '../assets/img/logo.png'
import { useNavigate } from 'react-router-dom';

export const Navbar: React.FC<{}> = () => {

    const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position='fixed'>
            <Toolbar>
                <Container maxWidth="xl">
                    <Grid 
                        container 
                        direction="row" 
                        justifyContent="space-between"
                        alignItems="center"
                        >
                        <Grid item>
                            <Stack direction='row' spacing={2} justifyContent="center" alignItems="center">
                                <Box
                                    component="img"
                                    sx={{
                                    height: 50,
                                    }}
                                    alt="Your logo."
                                    src={Logo}
                                />
                                <Typography variant='h6' sx={{ textTransform: 'uppercase', fontWeight:'bold' }}>Purple Store</Typography>
                            </Stack>
                        </Grid>
                        <Grid item>
                            <Stack direction='row' spacing={2}>
                                <Button variant='contained'onClick={()=>navigate('/login')}>Login</Button>
                                <Button variant='outlined' sx={{ color:"#ffffff" }}>Register</Button>
                            </Stack>
                            
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    </Box>
  )
}