import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchListMovieRequest } from '../../Home/MovieShow/modules/actions';
import MovieTable from './MovieTable';
import MovieToolbar from './MovieToolbar';

const useStyle = makeStyles((theme) => ({
  wrapper: {
    padding: 20,
    height: 'calc(100vh - 68px)',
    backgroundColor: theme.palette.background.light,
  },
}));

export default function MovieManage() {
  const classes = useStyle();
  const dispatch = useDispatch();
  // Get state from store
  const listMovie = useSelector((state) => state.listMovieReducer.listMovie);

  // Did Mount
  React.useEffect(() => {
    // Dispatch action request to init saga listMovie API
    dispatch(actFetchListMovieRequest());
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      {listMovie && listMovie.length > 0 && (
        <>
          <MovieToolbar />
          <MovieTable rows={listMovie} />
        </>
      )}
    </div>
  );
}
