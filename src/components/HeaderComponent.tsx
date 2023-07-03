import { FC, ReactNode } from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';


type HeaderProps = {
    title: string;
    description: string;
    element?: ReactNode | null;
}

export const HeaderComponent: FC<HeaderProps> = ({ title, description, element }) => {
  return (
    <>
        <Box sx={{ width:'100%', height:'350px' }}>
            <Grid 
                container 
                direction='row' 
                justifyContent='center' 
                alignItems='center'
                sx={{ height:'100%' }}
                >
                <Grid item xs={5}>
                    <Grid 
                        direction='column' 
                        justifyContent='center' 
                        alignItems='center'
                        sx={{ height:'100%' }}
                        >
                        <Grid item>
                            <Typography variant='h1'>
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item sx={{ mt: 2 }}>
                            <Typography>
                                {description}
                            </Typography>
                        </Grid>
                        { element !== undefined && <Grid item sx={{ mt: 4 }}>{element}</Grid> }
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        <Divider />
    </>
  )
}