import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actFetchDetailMovieRequest } from './modules/actions';

export default function DetailMovie(props) {
  // useSelector uses to get state from store
  const detailMovie = useSelector(
    (state) => state.detailMovieReducer.detailMovie,
  );

  // Declare dispatch func
  const dispatch = useDispatch();

  // Did mount
  useEffect(() => {
    const { id } = props.match.params;
    // Dispatch actFetchDetailMovieRequest
    dispatch(actFetchDetailMovieRequest(id));
  }, [dispatch, props.match.params]);

  // RenderHTLM func
  const renderTable = (list) => {
    if (list && list.length > 0) {
      return list.map((item) => {
        return (
          <tr key={item.maLichChieu}>
            <td>{item.thongTinRap.tenCumRap}</td>
            <td>{item.thongTinRap.tenRap}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
            <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
            <td>
              <a className="btn btn-success" href="#datve">
                Dat ve
              </a>
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <div className="container">
      {/* Check in case detailMovie.data is null then can not read props of detailMovie  */}
      {detailMovie.data && (
        <>
          {' '}
          <h3>Detail Movie</h3>
          <div className="row">
            <div className="col-sm-6">
              <img src={detailMovie.data.hinhAnh} alt="" />
            </div>
            <div className="col-sm-6">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Ten Phim</td>
                    <td>{detailMovie.data.tenPhim}</td>
                  </tr>
                  <tr>
                    <td>Mo ta</td>
                    <td>{detailMovie.data.moTa}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Cum rap</th>
                    <th>Ten rap</th>
                    <th>Ngay chieu</th>
                    <th>Gio chieu</th>
                  </tr>
                </thead>
                <tbody>{renderTable(detailMovie.data.lichChieu)}</tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
