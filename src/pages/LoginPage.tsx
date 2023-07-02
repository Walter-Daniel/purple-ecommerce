import React, { useState } from 'react'
import { Container, Button, Grid, Paper, Box, Typography, TextField } from '@mui/material';

type LoginType = {
  username: string;
  password: string;
}

export const LoginPage: React.FC<{}> = () => {

  const [loginData, setLogindata] = useState<LoginType>({
    username: "",
    password: ""
  })

  const data = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogindata({...loginData, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(loginData);
  }

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
                <Box component="form" onSubmit={handleSubmit}>
                  <TextField 
                    name= 'username'
                    margin='normal'
                    type='text'
                    fullWidth 
                    label='Username or Email' 
                    sx={{ mt:2, mb:1.5 }} 
                    required
                    onChange={data}
                    />
                  <TextField 
                    name='password'
                    margin='normal'
                    type='password'
                    fullWidth 
                    label='Password' 
                    sx={{ mt:1.5, mb:1.5 }} 
                    required
                    onChange={data}
                    />
                  <Button 
                    fullWidth 
                    type='submit'
                    variant='contained'
                    sx={{ mt:1.5, mb:3 }}
                    >Iniciar Sesión</Button>
                </Box>
              </Paper>
            </Grid>
        </Grid>
      </Container>
  )
}