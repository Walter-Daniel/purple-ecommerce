import { FC, ReactNode } from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import bg from '../assets/img/girls-clothes.avif'


type HeaderProps = {
    title: string;
    description: string;
    element?: ReactNode | null;
}

export const HeaderComponent: FC<HeaderProps> = ({ title, description, element }) => {
  return (
    <>
        <Box sx={{ width:'100%', height:'100vh', backgroundColor:'background.paper', position:'relative' }}>
            <img style={{ position:'absolute', top:'0', left:'0', width:'100%', height: '100%', objectFit:'cover'}} src={bg} alt="Foto de portada campaña 2023" />
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
        <Divider sx={{ color:'#10002b', backgroundColor:'#10002b'}}/>
    </>
  )
}