import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  newsContent: {
    height: 42,
    overflow: 'hidden',
  },
}));

export default function NewsItem() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="80"
          image="https://galaxycine.vn/media/2020/7/15/wonder-woman-1984-publicity-still-5-h-2019-1_1594801321671.jpg"
        />
      </CardActionArea>
      <CardContent>
        <CardActionArea>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
        </CardActionArea>
        <Typography
          className={classes.newsContent}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
