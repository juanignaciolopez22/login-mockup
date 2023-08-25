import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import LoginForm from '../components/login-form';

const LoginScreen = () => {
  const handleLogin = (values) => {
    console.log(values);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'rgb(250, 248, 255)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: 'rgb(227, 227, 227)',
          padding: '40px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: 'rgb(105, 132, 150)' }}>
          Login MockUp
        </Typography>
        <LoginForm onSubmit={handleLogin} />
      </Container>
    </Box>
  );
};

export default LoginScreen;
