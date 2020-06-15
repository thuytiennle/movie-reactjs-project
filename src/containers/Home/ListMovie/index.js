import React, { useEffect } from 'react';
import Swiper from 'react-id-swiper';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css/swiper.css';
import { actFetchListMovieRequest } from './modules/actions';
import MovieItem from '../../../components/MovieItem';

function ListMovie() {
  // LifeCycle DidMount
  // componentDidMount() {
  // 	this.props.fetchData();
  // }
  const listMovie = useSelector((state) => state.listMovieReducer.listMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchListMovieRequest());
  }, []);

  const renderHTML = (list) => {
    if (list && list.length > 0) {
      return list.map((movie) => {
        return (
          <div key={movie.maPhim} style={{ height: '400px', width: '250px' }}>
            <MovieItem movie={movie} />
          </div>
        );
      });
    }
    // else{
    //     return <Loading/>
    // }
  };
  const params = {
    effect: 'coverflow',
    loop: true,
    speed: 1000,
    // loopedSlides: 3, // according to the codepen
    // mousewheel: {
    //   releaseOnEdges: true,
    // },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 60,
      modifier: 3,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //   delay: 3000,
    // },
    spaceBetween: 30,
  };
  return (
    <div>
      <h3>ListMovie</h3>

      <Swiper {...params}>{renderHTML(listMovie)}</Swiper>
    </div>
  );
}

export default ListMovie;
