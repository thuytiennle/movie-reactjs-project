import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import * as Styled from './styledNavbar';

export default function Navbar() {
  return (
    <Styled.Nav id="header-navbar" className="navbar navbar-expand-xl">
      <a className="navbar-brand header-logo py-0" href="/">
        <Styled.LogoSpan className="header-logoWhite" data-hover="UN">
          UN
        </Styled.LogoSpan>
        <Styled.LogoSpan
          color="green"
          className="header-logoGreen"
          data-hover="iX"
        >
          iX
        </Styled.LogoSpan>
      </a>
      <Styled.ToggleBtn
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#header-nav"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <DehazeIcon fontSize="large" />
      </Styled.ToggleBtn>
      <div className="collapse navbar-collapse" id="header-nav">
        <Styled.Navbar className="navbar-nav" flex="20">
          <li className="nav-item active p-2">
            <Styled.NavLink className="nav-link" to="/" data-hover="LỊCH CHIẾU">
              LỊCH CHIẾU
            </Styled.NavLink>
          </li>
          <li className="nav-item p-2">
            <Styled.NavLink className="nav-link" to="/" data-hover="CỤM RẠP">
              CỤM RẠP
            </Styled.NavLink>
          </li>
          <li className="nav-item p-2">
            <Styled.NavLink className="nav-link" to="/" data-hover="TIN TỨC">
              TIN TỨC
            </Styled.NavLink>
          </li>
          <li className="nav-item p-2">
            <Styled.NavLink className="nav-link" to="/" data-hover="KHUYẾN MÃI">
              KHUYẾN MÃI
            </Styled.NavLink>
          </li>
        </Styled.Navbar>
        <Styled.Navbar className="nav" flex="2">
          <li className="nav-item">
            <Styled.RouterLink className="header-singUp btn" to="/sign-up">
              Đăng ký
            </Styled.RouterLink>
          </li>
          <li className="nav-item">
            <Styled.RouterLink
              className="header-login btn"
              to="/sign-in"
              color="green"
            >
              <span>Đăng nhập</span>
            </Styled.RouterLink>
          </li>
        </Styled.Navbar>
      </div>
    </Styled.Nav>
  );
}
