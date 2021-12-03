import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';

function MaincountryCard(props) {
    return (
        <Card sx={{ maxWidth: 100 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={props.flag}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        <h3 className="population">Population:{props.population}</h3>
                        <h3 className="currency">Region:{props.region}</h3>
                        <h3 className="currency">Capital:{props.capital}</h3>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default MaincountryCard;
