import styled from 'styled-components';

export const FooterSection = styled.footer`
  background-color: black;
  padding: 70px 0;
`;

export const FooterPartnership = styled.div`
  display: block;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const FooterTitle = styled.h5`
  color: #66fcf1;
  cursor: pointer;
  font-size: ${(props) => (props.logo ? '1.5rem' : '1.1rem')};
`;

export const FooterList = styled.p`
  color: white;
  cursor: pointer;
  transition: all 0.5s;
  font-size: 0.95rem;

  &:hover {
    color: #66fcf1;
  }

  @media screen and (max-width: 576px) {
    font-size: 0.75rem;
  }
`;

export const FooterListImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 20px;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.2);
  }
`;

export const FooterCopyRight = styled.p`
  color: #fff;
  text-align: center;
  margin: 20px 0 10px;
  padding: 10px 0;
  border-top: 1px solid #fff;
`;
