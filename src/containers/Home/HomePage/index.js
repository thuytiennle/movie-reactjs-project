import React from 'react';
import Header from '../Header';
import Carousel from '../Carousel';
import Booking from '../Booking';
import MovieShow from '../MovieShow';
import Cinema from '../Cinema';
import News from '../News';
import Discount from '../Discount';
import Footer from '../../../components/Footer';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Carousel />
      <Booking />
      <MovieShow />
      <Cinema />
      <News />
      <Discount />
      <Footer />
    </div>
  );
}
