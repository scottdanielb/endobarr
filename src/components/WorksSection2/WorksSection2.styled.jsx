import styled from 'styled-components';

export const PricingSection = styled.div`
  padding: 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800;900&family=Rubik:wght@800&display=swap');

  font-family: 'Nunito', sans-serif;
  color: black;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled.div`
  background: #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  width: 280px;
  height: 400px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.03);
    transition: all 0.3s ease-out;
    background-color: #acbee9;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800;900&family=Rubik:wght@800&display=swap');

  font-family: 'Nunito', sans-serif;
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 24px;
  align-items: center;
  color: black;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid gray;
`;

export const WorksCardText = styled.p`
  color: #404040;
  font-size: 1rem;
  padding: 1rem 1rem;
`;

export const WorksCardSubText = styled.p`
  color: #404040;
  font-size: 1rem;
  padding: 0rem 1rem;
`;
