import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Toolbar from '@material-ui/core/Toolbar';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Booking } from '../Booking';
import { Carousel } from '../Carousel';
import { Cinema } from '../Cinema';
import { MovieShow } from '../MovieShow';
import { ScrollToTopButton } from '../../../components/Button';
import { actFetchListMovieRequest } from '../MovieShow/modules/actions';
import { News } from '../News';
import { Discount } from '../Discount';
import { Footer } from '../../../components/Footer';

export default function HomePage() {
  const dispatch = useDispatch();
  // DidMount
  useEffect(() => {
    // Dispatch action request to init saga listMovie API
    dispatch(actFetchListMovieRequest());
  }, [dispatch]);

  return (
    <React.Fragment key="key">
      <Toolbar id="back-to-top-anchor" />
      <Carousel />
      <Booking />
      <MovieShow />
      <Cinema />
      <News />
      <Discount />
      <Footer />
      <ScrollToTopButton>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTopButton>
    </React.Fragment>
  );
}
