import React from 'react';
import { Container, Button, Grid, Paper, Box, Typography, TextField } from '@mui/material';
import { useNotification } from '../context/notification.context';
import { loginValidate } from '../utilities/validateForm';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';


type LoginType = {
  username: string;
  password: string;
}

export const LoginPage: React.FC<{}> = () => {

  // const { getError, getSuccess } = useNotification();

  // const [loginData, setLogindata] = useState<LoginType>({
  //   username: "",
  //   password: ""
  // })

  // const data = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setLogindata({...loginData, [e.target.name]: e.target.value})
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   console.log(loginData);
  //   loginValidate.validate(loginData)
  //                     .then(() => {
  //                       getSuccess('Bienvenid@ a Purple Store');
  //                     }).catch((error) => {
  //                       getError(error.message);
  //                     })
  // }

  const { getSuccess } = useNotification();

  const formik = useFormik<LoginType>({
    initialValues: {
     username: '',
     password:''
    },
    validationSchema: loginValidate,
    onSubmit: (values: LoginType) => {
      getSuccess(JSON.stringify(values))
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