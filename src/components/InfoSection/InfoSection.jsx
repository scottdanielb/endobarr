import React from 'react';
import {
  Column1,
  Heading,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
  Column2,
} from './InfoSection.styled';

const InfoSection = ({
  lightBg,
  id,
  headLine,
  topLine1,
  topLine2,
  topLine3,
  description1,
  description2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <Heading>{headLine}</Heading>
                <TopLine>{topLine1}</TopLine>
                <TopLine>{topLine2}</TopLine>
                <TopLine>{topLine3}</TopLine>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                <Subtitle>{description1}</Subtitle>
                <Subtitle>{description2}</Subtitle>
              </TextWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
