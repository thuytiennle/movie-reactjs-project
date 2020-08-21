import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchListMovieRequest } from '../../Home/MovieShow/modules/actions';
import MovieTable from './MovieTable';
import MovieToolbar from './MovieToolbar';
import MovieEditDialog from './MovieEditDialog';
import { actCloseMovieDialog, actCloseShowTimeDialog } from './module/actions';
import ShowTimeCreateDialog from './ShowTimeCreateDialog';

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
