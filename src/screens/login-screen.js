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
        backgroundColor: 'rgb(34, 40, 49)', // Dark blue-gray
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: 'rgb(57, 62, 70)', // Dark blue-gray
          padding: '50px',
          borderRadius: '20px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: 'rgb(255, 211, 105)' }}>
          Login MockUp
        </Typography>
        <LoginForm onSubmit={handleLogin} />
      </Container>
    </Box>
  );
};

export default LoginScreen;
