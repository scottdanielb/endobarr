import styled from 'styled-components';
import heroImage from '../../images/hero_image.jpg';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { Link } from 'react-scroll/modules';

export const HeroContainer = styled.div`
  background-image: url(${heroImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 0;
  margin-top: -80px;
  overflow: hidden;
`;

export const HeroContent = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
`;

export const HeroH1 = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800;900&family=Rubik:wght@800&display=swap');

  font-family: 'Nunito', sans-serif;
  color: #fff;
  font-weight: 800;
  width: 65%;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const HeroH3 = styled.h4`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800;900&family=Rubik:wght@800&display=swap');

  font-family: 'Nunito', sans-serif;
  color: #fff;
  width: 70%;
  padding-top: 40px;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: -150px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const ArrowFoward = styled(MdArrowForward)`
  margin-left: 8px;

  font-size: 16px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 16px;
`;

export const Button = styled(Link)`
  border-radius: 50px;
  background: #446ccd;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  display: flex;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 200px;
  transition: all 0.2s ease-in-out;
  margin-top: 150px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #446ccd;
  }
`;
