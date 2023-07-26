import { FC, ReactNode } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import bg1 from '../assets/img/bg4.jpg';
import bg2 from '../assets/img/bg5.avif';


type HeaderProps = {
    title: string;
    description: string;
    element?: ReactNode | null;
}

export const HeaderComponent: FC<HeaderProps> = ({ title, description, element }) => {
  return (
    <>
        <Box width='100%' height='100vh' bgcolor='backgroun.paper' position='relative' className='hero'>
            <Grid container position='absolute' direction='row' height='100%' lg={24}>
                <Grid item xs={24} md={6}lg={6}><img style={{ width:'100%', height:'100%', objectFit:'cover'}}src={bg1} alt="" /></Grid>
                <Grid item xs={0}  md={6} lg={6} className='hero-1' sx={{ maxWidth: '50%' }}><img style={{ width:'100%', height:'100%', objectFit:'cover'}} src={bg2} alt="" /></Grid>
            </Grid>
            <Grid 
                container 
                direction='row' 
                justifyContent='center' 
                alignItems='center'
                sx={{ height:'100%'}}
                >
                <Grid item xs={5} position='relative' className='hero-text'>
                    <Grid
                        container 
                        direction='column' 
                        justifyContent='center' 
                        alignItems='center'
                        sx={{ height:'100%', border:'1px solid white' }}
                        >
                        <Grid item>
                            <h1>
                                {title}
                            </h1>
                        </Grid>
                        <Grid item sx={{ mt: 2 }}>
                            <Typography>
                                {description}
                            </Typography>
                        </Grid>
                        { element !== undefined && <Grid item sx={{ mt: 4, mb: 2 }}>{element}</Grid> }
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        {/* <Divider sx={{ color:'#10002b', backgroundColor:'#10002b'}}/> */}
    </>
  )
}