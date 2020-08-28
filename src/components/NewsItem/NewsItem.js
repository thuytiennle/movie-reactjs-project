import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  newsContent: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  link: {
    color: theme.palette.text.primary,
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.text.secondary,
    },
  },
}));

export default function NewsItem(props) {
  const { news } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Link to={`/news/${news.id}`}>
        <CardMedia component="img" height="80" image={news.img} />
      </Link>
      <CardContent>
        <Link className={classes.link} to={`/news/${news.id}`}>
          <Typography gutterBottom variant="h6" component="h2">
            {`${news.title.substring(0, 45)} ...`}
          </Typography>
        </Link>
        <Typography
          className={classes.newsContent}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {`${news.content.substring(0, 50)} ...`}
        </Typography>
      </CardContent>
    </Card>
  );
}

NewsItem.propTypes = {
  news: PropTypes.any,
};
