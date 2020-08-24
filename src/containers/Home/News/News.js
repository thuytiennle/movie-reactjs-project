import { Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import NewsItem from '../../../components/NewsItem/NewsItem';
import { TextTranslation } from '../../Language/TextTranslation';
import news from './news.json';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '50px 0',
    borderRadius: 'unset',
    backgroundColor: theme.palette.background.dark,
  },
  title: {
    textAlign: 'center',
    marginBottom: 30,
  },
}));

export default function News() {
  const classes = useStyles();
  return (
    <Paper className={classes.wrapper} id="news">
      <Container maxWidth="md">
        <Typography variant="h4" color="secondary" className={classes.title}>
          <TextTranslation id="container.Cinema.News" />
        </Typography>
        <Grid container spacing={2}>
          {news.map((item, index) => (
            // Divide grid 2 elements/1st row and 3 for 2nd row
            <Grid
              key={`news-${index}`}
              item
              xs={12}
              sm={index / 5 === 0 || index % 5 === 1 ? 6 : 4}
            >
              <NewsItem news={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
}
