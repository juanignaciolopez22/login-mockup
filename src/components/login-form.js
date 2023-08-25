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
  username: Yup.string().required('Ingrese un nombre de usuario'),
  password: Yup.string().min(8, 'La contraseña debe contener al menos 8 caracteres').required('Ingrese una contraseña'),
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
            label="Usuario"
            variant="outlined"
            sx={{
              width:'90%',
              marginBottom: '16px',
              backgroundColor: 'rgb(240, 240, 240)', 
            }}
          />
          {errors.username && (
            <Typography variant="body2" color="error" sx={{ textAlign: 'center', marginBottom: '20px' }}>
              {errors.username}
            </Typography>
          )}

          <Field
            name="password"
            as={TextField}
            label="Contraseña"
            variant="outlined"
            type="password"
            sx={{
              width:'90%',
              marginBottom: '16px',
              backgroundColor: 'rgb(240, 240, 240)', 
            }}
          />
          {errors.password && (
            <Typography variant="body2" color="error" sx={{ textAlign: 'center', marginBottom: '20px' }}>
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
                label={<Typography sx={{ color: 'rgb(72, 84, 91)' }}>Recordar nombre de usuario</Typography>}
                sx={{ marginBottom: '16px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}
              />
            )}
          </Field>

          <Button
            type="submit"
            variant="contained"
            sx={{
              marginBottom: '8px',
              width: '50%',
              backgroundColor: 'rgb(105, 132, 150)', 
              '&:hover': {
                backgroundColor: 'rgb(125, 152, 170)', 
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
