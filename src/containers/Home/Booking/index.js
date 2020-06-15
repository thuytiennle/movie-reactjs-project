import React from 'react';
import * as Styled from './StyledBooking';

export default function index() {
  return (
    <Styled.Booking>
      <Styled.BookingContainer className="container">
        <Styled.BookingForm id="booking-form" className="booking-form">
          <div className="row m-0">
            {/* Chọn phim */}
            <div className="col-lg-3 col-xl-4 dropdown show">
              <Styled.BookingToggle
                className="dropdown-toggle"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Phim
              </Styled.BookingToggle>
              <Styled.DropdownMenu
                className="dropdown-menu selectScroll"
                aria-labelledby="dropdownMenuLink"
              >
                <li className="dropdown-item">Action</li>
                <li className="dropdown-item">Another action</li>
                <li className="dropdown-item">Something else here</li>
                <li className="dropdown-item">Action</li>
                <li className="dropdown-item">Another action</li>
                <li className="dropdown-item">Something else here</li>
                <li className="dropdown-item">Action</li>
                <li className="dropdown-item">Another action</li>
                <li className="dropdown-item">Something else here</li>
                <li className="dropdown-item">Action</li>
                <li className="dropdown-item">Another action</li>
                <li className="dropdown-item">Something else here</li>
                <li className="dropdown-item">Action</li>
                <li className="dropdown-item">Another action</li>
                <li className="dropdown-item">Something else here</li>
              </Styled.DropdownMenu>
            </div>
            {/* Chọn rạp */}
            <div className="col-lg-2 dropdown show">
              <Styled.BookingToggle
                className="dropdown-toggle"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Rạp
              </Styled.BookingToggle>
              <Styled.DropdownMenu
                className="dropdown-menu selectScroll"
                aria-labelledby="dropdownMenuLink"
              >
                <li className="dropdown-item">Action</li>
                <li className="dropdown-item">Another action</li>
                <li className="dropdown-item">Something else here</li>
                <li className="dropdown-item">Action</li>
                <li className="dropdown-item">Another action</li>
                <li className="dropdown-item">Something else here</li>
                <li className="dropdown-item">Action</li>
                <li className="dropdown-item">Another action</li>
                <li className="dropdown-item">Something else here</li>
                <li className="dropdown-item">Action</li>
                <li className="dropdown-item">Another action</li>
                <li className="dropdown-item">Something else here</li>
                <li className="dropdown-item">Action</li>
                <li className="dropdown-item">Another action</li>
                <li className="dropdown-item">Something else here</li>
              </Styled.DropdownMenu>
            </div>
            {/* Chọn ngày */}
            <div className="col-lg-2 dropdown show">
              <Styled.BookingToggle
                className="dropdown-toggle"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Ngày xem
              </Styled.BookingToggle>
              <Styled.DropdownMenu
                className="dropdown-menu selectScroll "
                aria-labelledby="dropdownMenuLink"
              >
                <li className="dropdown-item">Action</li>
                <li className="dropdown-item">Another action</li>
                <li className="dropdown-item">Something else here</li>
              </Styled.DropdownMenu>
            </div>
            {/* Chọn suất chiếu */}
            <div className="col-lg-2 dropdown show">
              <Styled.BookingToggle
                className="dropdown-toggle"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Suất chiếu
              </Styled.BookingToggle>
              <Styled.DropdownMenu
                className="dropdown-menu selectScroll"
                aria-labelledby="dropdownMenuLink"
              >
                <li className="dropdown-item">Action</li>
                <li className="dropdown-item">Another action</li>
                <li className="dropdown-item">Something else here</li>
              </Styled.DropdownMenu>
            </div>
            <div className="col-lg-3 col-xl-2 bookingBtn d-flex justify-content-center">
              <Styled.BookingButton type="button" className="booking-button">
                MUA VÉ NHANH
              </Styled.BookingButton>
            </div>
          </div>
        </Styled.BookingForm>
      </Styled.BookingContainer>
    </Styled.Booking>
  );
}
