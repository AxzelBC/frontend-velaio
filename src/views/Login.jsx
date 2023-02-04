import React from 'react'
import {
    Container, Stack, Button, TextField, Box
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import news_api from '../utils/api-rest';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

function Login() {


    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            password: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <Container>
                <Box sx={{ width: '100%', height: '100%', overflow: 'auto' }} className='mt-5'>
                    <Box sx={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', overflow: 'auto' }}>
                        <Box></Box>
                        <form item='true' onSubmit={formik.handleSubmit} className='form-group d-grid'>
                            <Stack spacing={2}>
                                <TextField
                                    item="true"
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                                <TextField
                                    item="true"
                                    fullWidth
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                                <Button
                                    item="true"
                                    color="primary"
                                    variant="contained"
                                    fullWidth type="submit">
                                    Iniciar sesion
                                </Button>
                            </Stack>
                        </form>
                        <Box></Box>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Login