import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { TextTranslation } from '../../containers/Language/TextTranslation';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.dark,
    borderRadius: 'unset',
  },
  root: {
    flexGrow: 1,
    minWidth: 912,
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  tabContainer: {
    overflowX: 'scroll',
    boxShadow: '0 0 20px #e8e8e86c',
  },
  scrollCustom: {
    // Customize scrollbar
    '&::-webkit-scrollbar': {
      width: 4,
      height: 4,
      backgroundColor: '#e8e3e3',
      borderRadius: 10,
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: 10,
      boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 20,
      backgroundColor: theme.palette.secondary.main,
      outline: '1px solid slategrey',
    },
  },
  commentCard: {
    margin: 10,
    padding: 10,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.light,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentsCard: {
    margin: 10,
    padding: 10,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.light,
  },
  cardFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentContainer: {
    overflowY: 'scroll',
  },
  commentRoot: {
    height: 500,
    width: '100%',
  },
}));

export default function Review(props) {
  const { listComment, onSubmit } = props;
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(5);
  const [comment, setComment] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const commentItem = {
      img: '',
      account: JSON.parse(localStorage.getItem('UserSignIn')).taiKhoan || '',
      comment,
      rate: rating,
    };
    onSubmit(commentItem);
    setOpen(false);
  };

  const renderListComment = () => {
    if (listComment && listComment.length > 0) {
      return listComment.map((item, index) => {
        return (
          <Card key={`movie-review-${index}`} className={classes.commentsCard}>
            <Box className={classes.cardFlex}>
              <Box display="flex" alignItems="center">
                <Avatar alt="Remy Sharp" src={item.img} />
                <Typography style={{ marginLeft: 5 }} color="secondary">
                  {item.account}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" flexDirection="column">
                <Typography variant="h6">{item.rate}</Typography>
                <Rating
                  value={item.rate}
                  name="read-only"
                  defaultValue={10}
                  precision={0.5}
                  readOnly
                />
              </Box>
            </Box>
            <CardContent>
              <Typography component="p">{item.comment}</Typography>
            </CardContent>
          </Card>
        );
      });
    }
  };
  return (
    <Paper className={classes.wrapper}>
      <Container maxWidth="md">
        <div className={clsx(classes.tabContainer, classes.scrollCustom)}>
          <div className={classes.root}>
            <Card
              color="primary"
              onClick={handleClickOpen}
              className={classes.commentCard}
            >
              <Box display="flex" alignItems="center">
                <Avatar alt="Remy Sharp" src="" />
                <Typography style={{ marginLeft: 5 }}>
                  <TextTranslation id="container.MovieShow.ReviewComment" />
                </Typography>
              </Box>
              <Rating
                name="read-only"
                defaultValue={10}
                precision={0.5}
                readOnly
              />
            </Card>
            <div
              className={clsx(classes.commentContainer, classes.scrollCustom)}
            >
              <div className={classes.commentRoot}>{renderListComment()}</div>
            </div>
            <Dialog
              fullWidth={Boolean(true)}
              maxWidth="sm"
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              {localStorage.getItem('UserSignIn') ? (
                <form onSubmit={handleSubmit}>
                  <DialogContent>
                    <Box
                      display="flex"
                      alignItems="center"
                      flexDirection="column"
                      margin="10px"
                    >
                      <Typography variant="h4">{rating}</Typography>
                      <Rating
                        name="simple-controlled"
                        value={rating}
                        onChange={(event, newValue) => {
                          setRating(newValue);
                        }}
                      />
                    </Box>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder={TextTranslation({
                        id: 'container.MovieShow.ReviewComment',
                      })}
                      multiline
                      rows="4"
                      onChange={(event) => {
                        setComment(event.target.value);
                      }}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" variant="outlined" color="primary">
                      <TextTranslation id="container.MovieShow.Post" />
                    </Button>
                  </DialogActions>
                </form>
              ) : (
                <>
                  <DialogContent
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography style={{ marginBottom: 10 }}>
                      <TextTranslation id="container.MovieShow.SignIn" />
                    </Typography>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        setOpen(false);
                        // Go to sign in page
                        history.push('/sign-in');
                      }}
                      color="primary"
                    >
                      <TextTranslation id="components.Navbar.SignIn" />
                    </Button>
                  </DialogContent>
                </>
              )}
            </Dialog>
          </div>
        </div>
      </Container>
    </Paper>
  );
}

Review.propTypes = {
  listComment: PropTypes.any,
  onSubmit: PropTypes.func,
};
