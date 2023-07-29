import React from 'react';
import { AppBar, Box, Toolbar, Container, Grid, Stack,} from '@mui/material';
import Logo from '../assets/img/logo.png'
import { useNavigate } from 'react-router';
import { IsAuthenticatesButtons, NonAuthenticatesButtons } from '../components';
import { useAppSelector } from '../redux/hooks';

export const Navbar: React.FC<{}> = () => {

    const navigate = useNavigate();
    const { status } = useAppSelector((state) => state.authReducer)

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position='fixed' sx={{ padding:'0.5rem', bgcolor: 'purple' }}>
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
                                    
                                </Stack>
                            </div>
                        </Grid>
                        <Grid item>
                            { status === 'authenticated' ? <IsAuthenticatesButtons /> : <NonAuthenticatesButtons /> }     
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    </Box>
  )
}