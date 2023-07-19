import React from 'react';
import { AppBar, Box, Toolbar, Container, Grid, Button, Typography, Stack, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Logo from '../assets/img/logo.png'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../redux';

export const Navbar: React.FC<{}> = () => {

    const navigate = useNavigate();
    const listProducts = useAppSelector((state) => state.cartReducer.length);
    const { isAuth } = useAppSelector((state) => state.authReducer)

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position='fixed' sx={{ padding:'0.5rem' }}>
            <Toolbar>
                <Container maxWidth="xl">
                    <Grid 
                        container 
                        direction="row" 
                        justifyContent="space-between"
                        alignItems="center"
                        >
                        <Grid item>
                            <div onClick={()=>navigate('/')} className='container-logo'>
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
                            </div>
                        </Grid>
                        <Grid item>
                            {
                                isAuth ? 
                                        <Stack direction='row' spacing={2}>
                                            <Box sx={{ padding: '8px'}}>
                                                <IconButton onClick={()=>navigate('/user')}>
                                                    <VolunteerActivismIcon />
                                                </IconButton>
                                                <span></span>
                                            </Box>
                                            <Box position='relative' sx={{ padding: '8px'}}>
                                                <IconButton onClick={()=>navigate('/user')}>
                                                    <ShoppingCartOutlinedIcon />
                                                </IconButton>
                                            <span className='cart-number'>{listProducts}</span>
                                            </Box>                               
                                            <Button variant='contained'onClick={()=>navigate('/login')}>Logout</Button>
                                        </Stack>
                                        :
                                        <Stack direction='row' spacing={2}>
                                            <Box position='relative' sx={{ padding: '8px'}}>
                                                <IconButton onClick={()=>navigate('/user')}>
                                                    <VolunteerActivismIcon />
                                                </IconButton>
                                                <span className='cart-number'>{listProducts}</span>
                                            </Box>
                                            <Button variant='contained'onClick={()=>navigate('/login')}>Login</Button>
                                            <Button variant='outlined' sx={{ color:"#ffffff" }}>Register</Button>
                                        </Stack>
                                }
                            
                            
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    </Box>
  )
}