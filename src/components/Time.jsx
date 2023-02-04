import React from 'react'
import { Container, Box, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { time_api } from '../utils/api-rest'
import Icon from '@mui/material/Icon';

function Time() {

    const [myTime, setMyTime] = useState({})

    const dataTime = async () => {
        await time_api().then(
            response => { setMyTime(response); }
        )
    }

    useEffect(() => {
        dataTime()
    }, [])

    return (
        <Container>
            <Box sx={{ border: 1, backgroundColor: 'blue', borderRadius: '10%' }}>
                <Box sx={{ paddingX: '20rem', justifyContent: 'center' }}>
                    <Stack item='true' direction="row" spacing={5}>
                        <Box>
                            <span>
                                <Icon>cloud</Icon>
                            </span>
                            <Typography variant="h5">
                                {myTime.sys ? myTime.name : 'Cargando '}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3">
                                {myTime.sys ? myTime.main.temp : 'Cargando '}C
                            </Typography>
                        </Box>
                        <Box>
                            <Stack>
                                <Typography variant="h6">
                                    Humedad:{myTime.sys ? myTime.main.humidity : 'Cargando'} %
                                </Typography>
                                <Typography variant="h6">
                                    Pais: {myTime.sys ? myTime.sys.country : 'Cargando'}
                                </Typography>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Container>
    )
}

export default Time