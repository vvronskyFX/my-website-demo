import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
  Box: {
    height: 30,
    display: "flex",
    //border: "1px solid black",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 8
  },
  //bottomLeftBox: {
    //justifyContent: "flex-end",
    //alignItems: "flex-end"
  //},
});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();

//Here we have different positons and placments of objects
//and texts within the Image card

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            
            {place.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {place.description}
            <Box
             m={1} //margin
             className={`${classes.Box}`}
            >
            <Button 
             variant="contained"
             component="span"
             color="green" 
             style={{ height: 40 }}
            >
              Book Here
            </Button>
           </Box>         
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
//<Box
             //m={1} //margin
             //className={`${classes.Box}`}
            //