import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import * as Styled from './StyledFooter';

export default function Footer() {
  return (
    <Styled.FooterSection>
      <div className="container">
        <div className="row m-0">
          <div className="col-6 col-lg-4">
            <Styled.FooterTitle logo>UNiX</Styled.FooterTitle>
            <Styled.FooterList>FAQs</Styled.FooterList>
            <Styled.FooterList>Brand guidelines</Styled.FooterList>
            <Styled.FooterList>Thảo thuận sử dụng</Styled.FooterList>
            <Styled.FooterList>Chính sách bảo mật</Styled.FooterList>
          </div>

          <Styled.FooterPartnership className="col-lg-5">
            <Styled.FooterTitle>Đối tác</Styled.FooterTitle>
            {/* First Row */}
            <div className="row col-sm-12 col-xs-12 linePartner">
              <a href="https://www.cgv.vn/" title="CGV">
                <Styled.FooterListImg
                  className="iconConnect"
                  src="../img/cgv.png"
                  style={{ backgroundColor: '#fff' }}
                  alt=""
                />
              </a>
              <a href="http://bhdstar.vn" title="BHD">
                <Styled.FooterListImg
                  className="iconConnect"
                  src="../img/bhd.png"
                  alt=""
                />
              </a>
              <a href="http://galaxycine.vn" title="Galaxy">
                <Styled.FooterListImg
                  className="iconConnect"
                  src="../img/galaxycine.png"
                  alt=""
                />
              </a>
              <a href="http://cinestar.com.vn" title="Cinestar">
                <Styled.FooterListImg
                  className="iconConnect"
                  src="../img/cinestar.png"
                  alt=""
                />
              </a>
              <a href="http://lottecinemavn.com" title="LotteCinema">
                <Styled.FooterListImg
                  className="iconConnect"
                  src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png"
                  alt=""
                />
              </a>
            </div>
            {/* Second Row */}
            <div className="row col-sm-12 col-xs-12 linePartner">
              <a href="https://www.megagscinemas.vn" title="MegaGS">
                <Styled.FooterListImg
                  className="iconConnect"
                  src="../img/megags.png"
                  alt=""
                />
              </a>
              <a href="https://www.betacineplex.vn/" title="Beta">
                <Styled.FooterListImg
                  className="iconConnect"
                  src="../img/bt.jpg"
                  alt=""
                />
              </a>
              <a href="http://ddcinema.vn" title="DDC">
                <Styled.FooterListImg
                  className="iconConnect"
                  src="../img/dongdacinema.png"
                  alt=""
                />
              </a>
              <a href="https://touchcinema.com/" title="Touch Cinema">
                <Styled.FooterListImg
                  className="iconConnect"
                  src="../img/TOUCH.png"
                />
              </a>
              <a href="https://cinemaxvn.com/" title="Cinemax">
                <Styled.FooterListImg
                  className="iconConnect"
                  src="../img/cnx.jpg"
                />
              </a>
            </div>
            {/* Third Row */}
            <div className="row col-sm-12 col-xs-12 linePartner">
              <a href="http://starlight.vn/" title="Starlight">
                <Styled.FooterListImg
                  className="iconConnect"
                  src="../img/STARLIGHT.png"
                />
              </a>
              <a href="https://www.dcine.vn/" title="Dcine">
                <Styled.FooterListImg
                  className="iconConnect"
                  src="../img/dcine.png"
                />
              </a>
              <a href="https://zalopay.vn/" title="ZaloPay">
                <Styled.FooterListImg
                  className="iconConnect"
                  src="../img/zalopay_icon.png"
                />
              </a>
              <a href="https://www.payoo.vn/" title="Payoo">
                <Styled.FooterListImg
                  className="iconConnect"
                  src="../img/payoo.jpg"
                />
              </a>
              <a href="https://www.vietcombank.com.vn/" title="Vietcombank">
                <Styled.FooterListImg
                  className="iconConnect"
                  src="../img/VCB.png"
                />
              </a>
            </div>
          </Styled.FooterPartnership>

          <div className="col-6 col-lg-3">
            <Styled.FooterTitle>Liên hệ</Styled.FooterTitle>
            <Styled.FooterList>
              <Styled.FooterListImg
                className="iconConnect mb-0"
                src="../img/facebook-logo.png"
              />
              Facebook
            </Styled.FooterList>
            <Styled.FooterList>
              <Styled.FooterListImg
                className="iconConnect mb-0"
                src="../img/zalo-logo.png"
              />
              Zalo
            </Styled.FooterList>
            <Styled.FooterList>
              <PhoneIcon className="mr-2" />
              028 7300 8881
            </Styled.FooterList>
          </div>
        </div>
        <Styled.FooterCopyRight>
          2020 © Movie React Web / Web design by LTTT
        </Styled.FooterCopyRight>
      </div>
    </Styled.FooterSection>
  );
}
