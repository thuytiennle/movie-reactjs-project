import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchListMovieRequest } from '../../Home/MovieShow/modules/actions';
import MovieTable from './MovieTable';
import MovieToolbar from './MovieToolbar';
import MovieEditDialog from './MovieEditDialog';
import { actCloseMovieDialog, actCloseShowTimeDialog } from './module/actions';
import ShowTimeCreateDialog from './ShowTimeCreateDialog';
import { Loader } from '../../../components/LoadingIndicator';

const useStyle = makeStyles((theme) => ({
  wrapper: {
    padding: '25px 20px 55px',
    backgroundColor: theme.palette.background.light,
  },
}));

export default function MovieManage() {
  const classes = useStyle();
  const dispatch = useDispatch();
  // Get state from store
  const listMovie = useSelector((state) => state.listMovieReducer.listMovie);
  const loadingListMovie = useSelector(
    (state) => state.listMovieReducer.loadingListMovie,
  );
  const openMovieDialog = useSelector(
    (state) => state.movieManageReducer.openDialog,
  );
  const openShowTimeDialog = useSelector(
    (state) => state.movieManageReducer.openShowTimeDialog,
  );

  // Did Mount
  React.useEffect(() => {
    // Dispatch action request to init saga listMovie API
    dispatch(actFetchListMovieRequest());
  }, [dispatch]);

  // Loader
  if (loadingListMovie) {
    return <Loader />;
  }

  return (
    <div className={classes.wrapper}>
      {listMovie && listMovie.length > 0 && (
        <>
          <MovieToolbar />
          <MovieTable rows={listMovie} />
          <MovieEditDialog
            open={openMovieDialog}
            onClose={() => dispatch(actCloseMovieDialog())}
          />
          <ShowTimeCreateDialog
            open={openShowTimeDialog}
            onClose={() => dispatch(actCloseShowTimeDialog())}
          />
        </>
      )}
    </div>
  );
}
