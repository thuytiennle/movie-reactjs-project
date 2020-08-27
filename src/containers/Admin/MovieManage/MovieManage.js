import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../../components/LoadingIndicator';
import { actFetchListMovieRequest } from '../../Home/MovieShow/modules/actions';
import { actCloseMovieDialog, actCloseShowTimeDialog } from './module/actions';
import MovieEditDialog from './MovieEditDialog';
import MovieTable from './MovieTable';
import MovieToolbar from './MovieToolbar';
import ShowTimeCreateDialog from './ShowTimeCreateDialog';

const useStyle = makeStyles((theme) => ({
  wrapper: {
    padding: 20,
    height: 'calc(100vh - 68px)',
    backgroundColor: theme.palette.background.light,
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  loaderDiv: {
    marginLeft: 0,
    backgroundColor: theme.palette.titleBar.main,
    [theme.breakpoints.up('lg')]: {
      marginLeft: 240,
    },
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
  const errorUpdateMovie = useSelector(
    (state) => state.movieManageReducer.errorUpdateMovie,
  );

  // Did Mount
  React.useEffect(() => {
    // Dispatch action request to init saga listMovie API
    dispatch(actFetchListMovieRequest());
  }, [dispatch]);

  // Loader
  if (loadingListMovie) {
    return (
      <div className={classes.loaderDiv}>
        <Loader />;
      </div>
    );
  }

  if (errorUpdateMovie) {
    console.log(errorUpdateMovie.response);
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
