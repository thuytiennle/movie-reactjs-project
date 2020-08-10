import React, { memo } from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import {
  FooterSection,
  FooterTitle,
  FooterList,
  FooterPartnership,
  FooterListImg,
  FooterCopyRight,
} from './styledFooter';

function Footer() {
  return (
    <FooterSection>
      <div className="container">
        <div className="row m-0">
          <div className="col-6 col-lg-4">
            <FooterTitle logo>UNiX</FooterTitle>
            <FooterList>FAQs</FooterList>
            <FooterList>Brand guidelines</FooterList>
            <FooterList>Thảo thuận sử dụng</FooterList>
            <FooterList>Chính sách bảo mật</FooterList>
          </div>

          <FooterPartnership className="col-lg-5">
            <FooterTitle>Đối tác</FooterTitle>
            {/* First Row */}
            <div className="row col-sm-12 col-xs-12 linePartner">
              <a href="https://www.cgv.vn/" title="CGV">
                <FooterListImg
                  className="iconConnect"
                  src="../img/cgv.png"
                  style={{ backgroundColor: '#fff' }}
                  alt=""
                />
              </a>
              <a href="http://bhdstar.vn" title="BHD">
                <FooterListImg
                  className="iconConnect"
                  src="../img/bhd.png"
                  alt=""
                />
              </a>
              <a href="http://galaxycine.vn" title="Galaxy">
                <FooterListImg
                  className="iconConnect"
                  src="../img/galaxycine.png"
                  alt=""
                />
              </a>
              <a href="http://cinestar.com.vn" title="Cinestar">
                <FooterListImg
                  className="iconConnect"
                  src="../img/cinestar.png"
                  alt=""
                />
              </a>
              <a href="http://lottecinemavn.com" title="LotteCinema">
                <FooterListImg
                  className="iconConnect"
                  src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png"
                  alt=""
                />
              </a>
            </div>
            {/* Second Row */}
            <div className="row col-sm-12 col-xs-12 linePartner">
              <a href="https://www.megagscinemas.vn" title="MegaGS">
                <FooterListImg
                  className="iconConnect"
                  src="../img/megags.png"
                  alt=""
                />
              </a>
              <a href="https://www.betacineplex.vn/" title="Beta">
                <FooterListImg
                  className="iconConnect"
                  src="../img/bt.jpg"
                  alt=""
                />
              </a>
              <a href="http://ddcinema.vn" title="DDC">
                <FooterListImg
                  className="iconConnect"
                  src="../img/dongdacinema.png"
                  alt=""
                />
              </a>
              <a href="https://touchcinema.com/" title="Touch Cinema">
                <FooterListImg className="iconConnect" src="../img/TOUCH.png" />
              </a>
              <a href="https://cinemaxvn.com/" title="Cinemax">
                <FooterListImg className="iconConnect" src="../img/cnx.jpg" />
              </a>
            </div>
            {/* Third Row */}
            <div className="row col-sm-12 col-xs-12 linePartner">
              <a href="http://starlight.vn/" title="Starlight">
                <FooterListImg
                  className="iconConnect"
                  src="../img/STARLIGHT.png"
                />
              </a>
              <a href="https://www.dcine.vn/" title="Dcine">
                <FooterListImg className="iconConnect" src="../img/dcine.png" />
              </a>
              <a href="https://zalopay.vn/" title="ZaloPay">
                <FooterListImg
                  className="iconConnect"
                  src="../img/zalopay_icon.png"
                />
              </a>
              <a href="https://www.payoo.vn/" title="Payoo">
                <FooterListImg className="iconConnect" src="../img/payoo.jpg" />
              </a>
              <a href="https://www.vietcombank.com.vn/" title="Vietcombank">
                <FooterListImg className="iconConnect" src="../img/VCB.png" />
              </a>
            </div>
          </FooterPartnership>

          <div className="col-6 col-lg-3">
            <FooterTitle>Liên hệ</FooterTitle>
            <FooterList>
              <FooterListImg
                className="iconConnect mb-0"
                src="../img/facebook-logo.png"
              />
              Facebook
            </FooterList>
            <FooterList>
              <FooterListImg
                className="iconConnect mb-0"
                src="../img/zalo-logo.png"
              />
              Zalo
            </FooterList>
            <FooterList>
              <PhoneIcon className="mr-2" />
              028 7300 8881
            </FooterList>
          </div>
        </div>
        <FooterCopyRight>
          2020 © Movie React Web / Web design by LTTT
        </FooterCopyRight>
      </div>
    </FooterSection>
  );
}

export default memo(Footer);
