import {
  FECTH_DETAIL_MOVIE_REQUEST,
  FECTH_DETAIL_MOVIE_SUCCESS,
  FECTH_DETAIL_MOVIE_FAILED,
  ADD_COMMENT,
} from './constants';

const initialState = {
  detailMovie: {},
  loadingDetailMovie: false,
  errorDetailMovie: null,
  listComment: [
    {
      img:
        'https://i.pinimg.com/originals/c5/a8/66/c5a8665de55e9915d2bb7dd0fd509415.jpg',
      account: 'Lâm Vũ',
      comment: 'Phim rất hay và đáng xem!',
      rate: 5,
    },
    {
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYJn0Eh06YE5P4VtSSiRnwmeHyexGCIJX2rQ&usqp=CAU',
      account: 'Hoai Thương',
      comment: 'Phim rất kịch tính, hấp dẫn!',
      rate: 4,
    },
    {
      img:
        'https://data.kenhsinhvien.net/files/2014/02/22/avatar-ep-kinh-22.jpg',
      account: 'Hạ Vy',
      comment: 'Nội dụng lạ nhưng hơi dài dòng!',
      rate: 3,
    },
  ],
};

const detailMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FECTH_DETAIL_MOVIE_REQUEST:
      state.detailMovie = {};
      state.loadingDetailMovie = true;
      state.errorDetailMovie = null;
      return { ...state };
    case FECTH_DETAIL_MOVIE_SUCCESS:
      state.detailMovie = action.detailMovie;
      state.loadingDetailMovie = false;
      state.errorDetailMovie = null;
      return { ...state };
    case FECTH_DETAIL_MOVIE_FAILED:
      state.detailMovie = {};
      state.loadingDetailMovie = false;
      state.errorDetailMovie = action.err;
      return { ...state };
    case ADD_COMMENT:
      // Push new comment on list comment
      state.listComment = [...state.listComment, action.comment];
      return { ...state };
    default:
      return state;
  }
};

export default detailMovieReducer;
