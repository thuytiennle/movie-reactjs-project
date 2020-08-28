import {
  FETCH_DETAIL_CINEMA_REQUEST,
  FETCH_DETAIL_CINEMA_SUCCESS,
  FETCH_DETAIL_CINEMA_FAILED,
  ADD_COMMENT,
} from './constants';

const initialState = {
  detailCinema: [],
  loadingDetailCinema: true,
  errorDetailCinema: null,
  listComment: [
    {
      img:
        'https://i.pinimg.com/originals/c5/a8/66/c5a8665de55e9915d2bb7dd0fd509415.jpg',
      account: 'Lâm Vũ',
      comment: 'Rạp phục vụ tốt, nhân viên dễ thương',
      rate: 5,
    },
    {
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYJn0Eh06YE5P4VtSSiRnwmeHyexGCIJX2rQ&usqp=CAU',
      account: 'Hoai Thương',
      comment: 'Rạp OK',
      rate: 4,
    },
    {
      img:
        'https://data.kenhsinhvien.net/files/2014/02/22/avatar-ep-kinh-22.jpg',
      account: 'Hạ Vy',
      comment: 'Rạp có nhà vệ sinh không được sạch',
      rate: 2,
    },
  ],
};

const detailCinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAIL_CINEMA_REQUEST:
      state.detailCinema = [];
      state.loadingDetailCinema = true;
      state.errorDetailCinema = null;
      return { ...state };
    case FETCH_DETAIL_CINEMA_SUCCESS:
      state.detailCinema = action.detailCinema;
      state.loadingDetailCinema = false;
      state.errorDetailCinema = null;
      return { ...state };
    case FETCH_DETAIL_CINEMA_FAILED:
      state.detailCinema = [];
      state.loadingDetailCinema = false;
      state.errorDetailCinema = action.err;
      return { ...state };
    case ADD_COMMENT:
      state.listComment = [...state.listComment, action.comment];
      return { ...state };
    default:
      return state;
  }
};

export default detailCinemaReducer;
