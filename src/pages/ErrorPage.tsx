
import { Button, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import {
    useNavigate,
    isRouteErrorResponse,
    useRouteError,
} from 'react-router-dom';

export const ErrorPage = () => {
    const navigate = useNavigate();
    const error = useRouteError() as Error;

    if (!isRouteErrorResponse(error)) {
        return null;
    }

    return (
        <Container sx={{ height:'100vh' }}>
            <Grid container height='100%' width='100%' justifyContent='center' alignItems='center'>
                <Grid item justifyContent='center' alignItems='center'>
                    <h1>Algo ha salido mal 😢</h1>
                    <Typography variant='h6'>{error.data}</Typography>
                    <Button variant="contained" color="secondary"  onClick={() => navigate('/')}>Regresa al inicio</Button>
                </Grid>
            </Grid>
        </Container>
    );
};