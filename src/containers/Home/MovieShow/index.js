import React, { useEffect } from 'react';
import Swiper from 'react-id-swiper';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../../../components/MovieItem';
import { actFetchListMovieRequest } from './modules/actions';
import * as Styled from './StyledMovieShow';

export default function MovieShow() {
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
  // Khai báo dispatch
  const dispatch = useDispatch();

  // Lấy state trên store bằng userSelector
  const listMovie = useSelector((state) => state.listMovieReducer.listMovie);

  // DidMount
  useEffect(() => {
    // Dispatch action lấy listMovie API
    dispatch(actFetchListMovieRequest());
  }, []);

  // const listMovie = [
  //   {
  //     maPhim: 1318,
  //     tenPhim: 'Ted 2',
  //     biDanh: 'ted-2',
  //     trailer: 'https://www.youtube.com/embed/S3AVcCggRnU',
  //     hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/ted2.jpg',
  //     moTa:
  //       "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
  //     maNhom: 'GP05',
  //     ngayKhoiChieu: '2019-07-29T00:00:00',
  //     danhGia: 5,
  //   },
  //   {
  //     maPhim: 1333,
  //     tenPhim: 'Trainwreck',
  //     biDanh: 'rainwreck',
  //     trailer: 'https://www.youtube.com/embed/S3AVcCggRnU',
  //     hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/trainwreck.jpg',
  //     moTa:
  //       "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
  //     maNhom: 'GP05',
  //     ngayKhoiChieu: '2019-07-29T00:00:00',
  //     danhGia: 5,
  //   },
  //   {
  //     maPhim: 1356,
  //     tenPhim: 'Inside Out',
  //     biDanh: 'Inside Out',
  //     trailer: 'https://www.youtube.com/embed/S3AVcCggRnU',
  //     hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/insideout.jpg',
  //     moTa:
  //       "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
  //     maNhom: 'GP05',
  //     ngayKhoiChieu: '2019-07-29T00:00:00',
  //     danhGia: 5,
  //   },
  //   {
  //     maPhim: 5644,
  //     tenPhim: 'Home',
  //     biDanh: 'Home',
  //     trailer: 'https://www.youtube.com/embed/S3AVcCggRnU',
  //     hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/home.jpg',
  //     moTa:
  //       "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
  //     maNhom: 'GP05',
  //     ngayKhoiChieu: '2019-07-29T00:00:00',
  //     danhGia: 5,
  //   },
  //   {
  //     maPhim: 1556,
  //     tenPhim: 'Trainwreck',
  //     biDanh: 'rainwreck',
  //     trailer: 'https://www.youtube.com/embed/S3AVcCggRnU',
  //     hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/trainwreck.jpg',
  //     moTa:
  //       "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
  //     maNhom: 'GP05',
  //     ngayKhoiChieu: '2019-07-29T00:00:00',
  //     danhGia: 5,
  //   },
  //   {
  //     maPhim: 5858,
  //     tenPhim: 'Inside Out',
  //     biDanh: 'Inside Out',
  //     trailer: 'https://www.youtube.com/embed/S3AVcCggRnU',
  //     hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/insideout.jpg',
  //     moTa:
  //       "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
  //     maNhom: 'GP05',
  //     ngayKhoiChieu: '2019-07-29T00:00:00',
  //     danhGia: 5,
  //   },
  //   {
  //     maPhim: 8886,
  //     tenPhim: 'Home',
  //     biDanh: 'Home',
  //     trailer: 'https://www.youtube.com/embed/S3AVcCggRnU',
  //     hinhAnh: 'http://movie0706.cybersoft.edu.vn/hinhanh/home.jpg',
  //     moTa:
  //       "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
  //     maNhom: 'GP05',
  //     ngayKhoiChieu: '2019-07-29T00:00:00',
  //     danhGia: 5,
  //   },
  // ];

  const renderHTML = (list) => {
    if (list && list.length > 0) {
      return list.map((movie) => {
        return (
          <div key={movie.maPhim} style={{ width: '250px', height: '350px' }}>
            <MovieItem movie={movie} />
          </div>
        );
      });
    }
  };

  return (
    <Styled.MovieShow>
      <Styled.MovieNavTab
        className="nav nav-tabs"
        id="showTimeTab"
        role="tablist"
      >
        <li className="nav-item">
          <Styled.MovieNavLink
            className="nav-link active"
            id="nowShowing-tab"
            data-toggle="tab"
            href="#nowShowing"
            role="tab"
            aria-selected="true"
          >
            Phim đang chiếu
          </Styled.MovieNavLink>
        </li>
        <li className="nav-item">
          <Styled.MovieNavLink
            className="nav-link"
            id="upComing-tab"
            data-toggle="tab"
            href="#upComing"
            role="tab"
            aria-selected="false"
          >
            Phim sắp chiếu
          </Styled.MovieNavLink>
        </li>
      </Styled.MovieNavTab>
      <div className="tab-content" id="showTimeTabContent">
        <div
          className="tab-pane fade show active"
          id="nowShowing"
          role="tabpanel"
        >
          <Swiper {...params}>{renderHTML(listMovie)}</Swiper>
        </div>
        <div className="tab-pane fade" id="upComing" role="tabpanel">
          <Swiper {...params}>{renderHTML(listMovie)}</Swiper>
        </div>
      </div>
    </Styled.MovieShow>
  );
}
