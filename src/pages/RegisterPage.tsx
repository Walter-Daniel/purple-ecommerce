import React from 'react';
import { Container, Button, Grid, Paper, Box, Typography, TextField } from '@mui/material';
import { useNotification } from '../context/notification.context';
import { registerValidate } from '../utilities/validateForm';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useAppDispatch } from '../redux';
import { startGoogleSignIn } from '../redux/auth/thunk';


type LoginType = {
    firstName: string
    lastName: string
    email: string;
    password: string;
    password2: string;  
}

export const RegisterPage: React.FC<{}> = () => {

 
  const navigate = useNavigate();
 
  const { getSuccess } = useNotification();

  const formik = useFormik<LoginType>({
    initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password:'',
        password2: ''
    },
    validationSchema: registerValidate,
    onSubmit: (values: LoginType) => {
      getSuccess('Se ha creado con éxito su cuenta, ahora puede iniciar sesión!.')
      console.log(values)
      navigate("/login")
    },
  });

  return (
      <Container maxWidth="sm">
        <Grid 
          container 
          direction="column"
          justifyContent='center' 
          alignContent='center'
          sx={{ minHeight: '100vh' }} 
          >
            <Grid item>
              <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
                <Typography variant='h4' sx={{ mt:1, mb:1 }}>Iniciar Sesión</Typography>
                <Box component="form" onSubmit={formik.handleSubmit}>
                  <TextField 
                    id='firstName'
                    name= 'firstName'
                    label='Nombre(s)' 
                    margin='normal'
                    type='text'
                    fullWidth 
                    sx={{ mt:2, mb:1.5 }} 
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                  <TextField 
                    id='lastName'
                    name= 'lastName'
                    label='Apellido(s)' 
                    margin='normal'
                    type='text'
                    fullWidth 
                    sx={{ mt:2, mb:1.5 }} 
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                  <TextField 
                    id='email'
                    name= 'email'
                    label='Correo Electrónico' 
                    margin='normal'
                    type='text'
                    fullWidth 
                    sx={{ mt:2, mb:1.5 }} 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
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
                  <TextField 
                    id='password2'
                    name='password2'
                    label='Confirm Password' 
                    margin='normal'
                    type='password'
                    fullWidth 
                    sx={{ mt:1.5, mb:1.5 }} 
                    value={formik.values.password2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password2 && Boolean(formik.errors.password2)}
                    helperText={formik.touched.password2 && formik.errors.password2}
                    />
                  <Button 
                    fullWidth 
                    type='submit'
                    variant='contained'
                    sx={{ mt:1.5, mb:3 }}
                    >Registrate</Button>
                </Box>
                <Box>
                  <Typography>
                    No tienes una cuenta?. <Link to="/register" style={{ color: '#c77dff', textDecoration: 'none' }}>Registrate</Link>
                  </Typography>
                  <Typography>
                    Regresar al <Link to="/" style={{ color: '#c77dff', textDecoration: 'none' }}>inicio</Link>
                  </Typography>
                </Box>
              </Paper>
            </Grid>
        </Grid>
      </Container>
  )
}