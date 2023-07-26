import React from 'react';
import { Container, Button, Grid, Paper, Box, Typography, TextField } from '@mui/material';
import { useNotification } from '../context/notification.context';
import { loginValidate } from '../utilities/validateForm';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { login, useAppDispatch } from '../redux';
import { startGoogleSignIn } from '../redux/auth/thunk';


type LoginType = {
  username: string;
  password: string;
}

export const LoginPage: React.FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
 
  const { getSuccess } = useNotification();

  const formik = useFormik<LoginType>({
    initialValues: {
     username: '',
     password:''
    },
    validationSchema: loginValidate,
    onSubmit: (values: LoginType) => {
      getSuccess(JSON.stringify(values))
      dispatch(startGoogleSignIn())
      navigate("/")
    },
  });

  return (
      <Container maxWidth="xl">
        <Grid 
          container 
          direction="column"
          justifyContent='center' 
          alignContent='center'
          sx={{ minHeight: '100vh' }} 
          >
            <Grid item lg={4}>
              <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
                <h2>Iniciar Sesión</h2>
                <Box component="form" onSubmit={formik.handleSubmit}>
                  <TextField 
                    id='username'
                    name= 'username'
                    label='Username or Email' 
                    margin='normal'
                    type='text'
                    fullWidth 
                    sx={{ mt:2, mb:1.5 }} 
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                    />
                  <TextField 
                    id='password'
                    name='password'
                    label='Password' 
                    margin='normal'
                    type='password'
                    fullWidth 
                    sx={{ mt:1.5, mb:1.5 }} 
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    />
                  <Button 
                    fullWidth 
                    type='submit'
                    variant='contained'
                    sx={{ mt:1.5, mb:3 }}
                    >Iniciar Sesión</Button>
                </Box>
                <Box>
                  <Typography>
                    No tienes una cuenta?. <Link to="/register" style={{ color: 'black' }}>Registrate</Link>
                  </Typography>
                  <Typography>
                    Regresar al <Link to="/" style={{ color: 'black' }}>inicio</Link>
                  </Typography>
                </Box>
              </Paper>
            </Grid>
        </Grid>
      </Container>
  )
}