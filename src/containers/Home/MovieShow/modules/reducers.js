import {
  FETCH_LIST_MOVIE_REQUEST,
  FETCH_LIST_MOVIE_SUCCESS,
  FETCH_LIST_MOVIE_FAILED,
  MOVIE_MODAL_OPEN,
  MOVIE_MODAL_CLOSE,
} from './constants';

const initialState = {
  listMovie: [],
  loadingListMovie: false,
  listMovieError: null,
  isOpenModal: false,
  modalMovieURL: '',
};

const listMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_MOVIE_REQUEST:
      state.listMovie = [];
      state.loadingListMovie = true;
      state.listMovieError = null;
      return { ...state };

    case FETCH_LIST_MOVIE_SUCCESS:
      state.listMovie = action.data;
      state.loadingListMovie = false;
      state.listMovieError = null;
      return { ...state };

    case FETCH_LIST_MOVIE_FAILED:
      state.listMovie = [];
      state.loadingListMovie = false;
      state.listMovieError = action.err;
      return { ...state };

    case MOVIE_MODAL_OPEN:
      state.isOpenModal = true;
      state.modalMovieURL = action.movieURL;
      return { ...state };

    case MOVIE_MODAL_CLOSE:
      state.isOpenModal = false;
      return { ...state };

    default:
      return state;
  }
};

export default listMovieReducer;
