import styled from 'styled-components';

export const CarouselSlide = styled.div`
  width: 85%;
  margin: 0 auto;
`;

export const CarouselItem = styled.div`
  position: relative;
  transition: 0.5s;

  &:hover .carousel-videoBtn {
    display: block;
  }
`;

export const CarouselImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export const CarouselBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: #1f2833;
  color: #66fcf1;
  display: none;

  &:hover {
    background-color: #66fcf1;
    color: #1f2833;
    box-shadow: 0 0 5px #66fcf1, 0 0 25px #66fcf1, 0 0 50px #66fcf1,
      0 0 200px #66fcf1;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 0.8rem;
  }
`;
