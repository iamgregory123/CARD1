import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const Product = () => {
    const [output, setOutput] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log(res.data);
                setOutput(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {output.map((val, i) => (
                <Card key={i} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt={val.title}
                        height="140"
                        image={val.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {val.category}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {val.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
};

export default Product;
