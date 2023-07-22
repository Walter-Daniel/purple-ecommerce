import React from 'react';
import { Container, Button, Grid, Paper, Box, Typography, TextField } from '@mui/material';
import { registerValidate } from '../utilities/validateForm';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../redux';
import { startRegisterWithEmail } from '../redux/auth/thunk';
import { useNotification } from '../context/notification.context';


export type RegisterProps = {
    displayName: string
    email: string;
    password: string;
    password2?: string;  
}

export const RegisterPage: React.FC<{}> = () => {
  const {errorMessage} = useAppSelector((state) => state.authReducer)
  const { getSuccess,getError } = useNotification();
  const dispatch = useAppDispatch();

  const formik = useFormik<RegisterProps>({
    initialValues: {
      displayName: '',
      email: '',
      password:'',
      password2: ''
    },
    validationSchema: registerValidate,
    onSubmit: (values: RegisterProps) => {
      console.log(values)
      dispatch(startRegisterWithEmail(values))
      errorMessage ? getError(errorMessage) : getSuccess('Usted se ha registrado con éxito')
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
                <Typography variant='h4' sx={{ mt:1, mb:1 }}>Registrate</Typography>
                <Box component="form" onSubmit={formik.handleSubmit}>
                  <TextField 
                    id='displayName'
                    name= 'displayName'
                    label='Nombre completo' 
                    margin='normal'
                    type='text'
                    fullWidth 
                    sx={{ mt:2, mb:1.5 }} 
                    value={formik.values.displayName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.displayName && Boolean(formik.errors.displayName)}
                    helperText={formik.touched.displayName && formik.errors.displayName}
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
                    Ya tienes una cuenta?. <Link to="/login" style={{ color: '#c77dff', textDecoration: 'none' }}>Inicia sesión</Link>
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