import React from 'react'
import {
    Container, Stack, Button, TextField, Box
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Userclass from '../class/User_class'
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
    username: yup
        .string('Enter your email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

function Login() {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: 'My nickname',
            password: 'My password',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const user = new Userclass(values.username, values.password);
            await user.authUser()
            if (user._status == true) {
                navigate("/home")
            }
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
                                    id="username"
                                    name="username"
                                    label="username"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    error={formik.touched.username && Boolean(formik.errors.username)}
                                    helperText={formik.touched.username && formik.errors.username}
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