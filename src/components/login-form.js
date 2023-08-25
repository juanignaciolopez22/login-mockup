import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const LoginForm = ({ onSubmit }) => {
    
  return (
    <Formik
      initialValues={{ username: '', password: '', rememberMe: false }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ errors, isValidating, validateForm }) => (
        <Form>
          <Field
            name="username"
            as={TextField}
            label="Username"
            variant="outlined"
            fullWidth
            sx={{
              marginBottom: '16px',
              backgroundColor: 'rgb(34, 40, 49)', // Dark blue-gray
            }}
          />
          {errors.username && (
            <Typography variant="caption" color="error" sx={{ textAlign: 'left', marginBottom: '8px' }}>
              {errors.username}
            </Typography>
          )}

          <Field
            name="password"
            as={TextField}
            label="Contraseña"
            variant="outlined"
            type="password"
            fullWidth
            sx={{
              marginBottom: '16px',
              backgroundColor: 'rgb(34, 40, 49)', // Dark blue-gray
              
            }}
          />
          {errors.password && (
            <Typography variant="caption" color="error" sx={{ textAlign: 'left', marginBottom: '8px'}}>
              {errors.password}
            </Typography>
          )}

          <Field
            name="rememberMe"
            type="checkbox"
          >
            {({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} />}
                label={<Typography sx={{ color: 'rgb(238, 238, 238)' }}>Recordar nombre de usuario</Typography>}
                sx={{ marginBottom: '16px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}
              />
            )}
          </Field>

          <Button
            type="submit"
            variant="contained"
            sx={{
              marginBottom: '8px',
              width: '70%',
              backgroundColor: 'rgb(255, 211, 105)', // Light gold
              '&:hover': {
                backgroundColor: 'rgb(255, 211, 89)', // Light gray
              },
            }}
            onClick={() => {
              validateForm().then((errors) => {
                const hasErrors = Object.values(errors).some(Boolean);
                if (!hasErrors) {
                  onSubmit();
                }
              });
            }}
            disabled={isValidating}
          >
            Ingresar
          </Button>

        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
