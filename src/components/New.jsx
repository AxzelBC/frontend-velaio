import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function New({ titulo, autor, image, description }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title={titulo}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {titulo}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {autor}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Ver más</Button>
            </CardActions>
        </Card>
    );
}

export default New
